package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDevicePoolResult
 * Represents the result of a create device pool request.
**/
public class CreateDevicePoolResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePool")
    public DevicePool devicePool;
    public CreateDevicePoolResult withDevicePool(DevicePool devicePool) {
        this.devicePool = devicePool;
        return this;
    }
}