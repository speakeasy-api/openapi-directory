package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDeviceRequest
 * Represents the request to get the device.
**/
public class GetDeviceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public String accessToken;
    public GetDeviceRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public GetDeviceRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
}