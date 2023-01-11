package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceStatusRequest
 * Represents the request to update the device status.
**/
public class UpdateDeviceStatusRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public UpdateDeviceStatusRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public UpdateDeviceStatusRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceRememberedStatus")
    public DeviceRememberedStatusTypeEnum deviceRememberedStatus;
    public UpdateDeviceStatusRequest withDeviceRememberedStatus(DeviceRememberedStatusTypeEnum deviceRememberedStatus) {
        this.deviceRememberedStatus = deviceRememberedStatus;
        return this;
    }
}