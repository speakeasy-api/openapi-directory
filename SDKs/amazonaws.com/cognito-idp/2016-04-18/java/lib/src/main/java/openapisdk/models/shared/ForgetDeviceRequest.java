package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForgetDeviceRequest
 * Represents the request to forget the device.
**/
public class ForgetDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public String accessToken;
    public ForgetDeviceRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public ForgetDeviceRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
}