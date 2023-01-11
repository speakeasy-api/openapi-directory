package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDevicePoolResult
 * Represents the result of a get device pool request.
**/
public class GetDevicePoolResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devicePool")
    public DevicePool devicePool;
    public GetDevicePoolResult withDevicePool(DevicePool devicePool) {
        this.devicePool = devicePool;
        return this;
    }
}