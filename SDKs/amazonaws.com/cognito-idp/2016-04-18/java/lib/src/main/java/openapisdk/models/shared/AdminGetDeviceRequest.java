package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdminGetDeviceRequest
 * Represents the request to get the device, as an administrator.
**/
public class AdminGetDeviceRequest {
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public AdminGetDeviceRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminGetDeviceRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminGetDeviceRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}