package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDevicePoolResult
 * Represents the result of an update device pool request.
**/
public class UpdateDevicePoolResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePool")
    public DevicePool devicePool;
    public UpdateDevicePoolResult withDevicePool(DevicePool devicePool) {
        this.devicePool = devicePool;
        return this;
    }
}