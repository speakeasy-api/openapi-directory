package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UplinkEchoConfig
 * <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
**/
public class UplinkEchoConfig {
    @JsonProperty("antennaUplinkConfigArn")
    public String antennaUplinkConfigArn;
    public UplinkEchoConfig withAntennaUplinkConfigArn(String antennaUplinkConfigArn) {
        this.antennaUplinkConfigArn = antennaUplinkConfigArn;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public UplinkEchoConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}