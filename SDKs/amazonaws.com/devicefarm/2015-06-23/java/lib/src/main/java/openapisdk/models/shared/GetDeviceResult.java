package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeviceResult
 * Represents the result of a get device request.
**/
public class GetDeviceResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public Device device;
    public GetDeviceResult withDevice(Device device) {
        this.device = device;
        return this;
    }
}