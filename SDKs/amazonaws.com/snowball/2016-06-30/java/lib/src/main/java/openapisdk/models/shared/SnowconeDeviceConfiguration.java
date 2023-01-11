package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SnowconeDeviceConfiguration
 * Specifies the device configuration for an AWS Snowcone job. 
**/
public class SnowconeDeviceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WirelessConnection")
    public WirelessConnection wirelessConnection;
    public SnowconeDeviceConfiguration withWirelessConnection(WirelessConnection wirelessConnection) {
        this.wirelessConnection = wirelessConnection;
        return this;
    }
}