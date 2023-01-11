package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WirelessConnection
 * Configures the wireless connection on an AWS Snowcone device.
**/
public class WirelessConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsWifiEnabled")
    public Boolean isWifiEnabled;
    public WirelessConnection withIsWifiEnabled(Boolean isWifiEnabled) {
        this.isWifiEnabled = isWifiEnabled;
        return this;
    }
}