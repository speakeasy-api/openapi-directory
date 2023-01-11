package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceInstanceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceInstance")
    public DeviceInstance deviceInstance;
    public UpdateDeviceInstanceResult withDeviceInstance(DeviceInstance deviceInstance) {
        this.deviceInstance = deviceInstance;
        return this;
    }
}