package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterDeviceResponse
 * Response to a RegisterDevice request.
**/
public class RegisterDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceId")
    public String deviceId;
    public RegisterDeviceResponse withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}