package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminUpdateDeviceStatusRequest
 * The request to update the device status, as an administrator.
**/
public class AdminUpdateDeviceStatusRequest {
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public AdminUpdateDeviceStatusRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceRememberedStatus")
    public DeviceRememberedStatusTypeEnum deviceRememberedStatus;
    public AdminUpdateDeviceStatusRequest withDeviceRememberedStatus(DeviceRememberedStatusTypeEnum deviceRememberedStatus) {
        this.deviceRememberedStatus = deviceRememberedStatus;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminUpdateDeviceStatusRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminUpdateDeviceStatusRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}