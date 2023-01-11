package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceConfiguration
 * The container for <code>SnowconeDeviceConfiguration</code>. 
**/
public class DeviceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnowconeDeviceConfiguration")
    public SnowconeDeviceConfiguration snowconeDeviceConfiguration;
    public DeviceConfiguration withSnowconeDeviceConfiguration(SnowconeDeviceConfiguration snowconeDeviceConfiguration) {
        this.snowconeDeviceConfiguration = snowconeDeviceConfiguration;
        return this;
    }
}