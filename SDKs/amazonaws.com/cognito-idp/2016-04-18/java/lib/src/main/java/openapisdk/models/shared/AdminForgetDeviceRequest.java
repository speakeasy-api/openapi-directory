package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminForgetDeviceRequest
 * Sends the forgot device request, as an administrator.
**/
public class AdminForgetDeviceRequest {
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public AdminForgetDeviceRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminForgetDeviceRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminForgetDeviceRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}