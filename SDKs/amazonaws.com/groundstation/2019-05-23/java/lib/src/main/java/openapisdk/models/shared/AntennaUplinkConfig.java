package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AntennaUplinkConfig
 * Information about the uplink <code>Config</code> of an antenna.
**/
public class AntennaUplinkConfig {
    @JsonProperty("spectrumConfig")
    public UplinkSpectrumConfig spectrumConfig;
    public AntennaUplinkConfig withSpectrumConfig(UplinkSpectrumConfig spectrumConfig) {
        this.spectrumConfig = spectrumConfig;
        return this;
    }
    @JsonProperty("targetEirp")
    public Eirp targetEirp;
    public AntennaUplinkConfig withTargetEirp(Eirp targetEirp) {
        this.targetEirp = targetEirp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmitDisabled")
    public Boolean transmitDisabled;
    public AntennaUplinkConfig withTransmitDisabled(Boolean transmitDisabled) {
        this.transmitDisabled = transmitDisabled;
        return this;
    }
}