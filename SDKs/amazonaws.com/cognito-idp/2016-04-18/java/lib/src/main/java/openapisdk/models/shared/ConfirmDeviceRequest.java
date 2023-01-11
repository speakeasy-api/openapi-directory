package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfirmDeviceRequest
 * Confirms the device request.
**/
public class ConfirmDeviceRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public ConfirmDeviceRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("DeviceKey")
    public String deviceKey;
    public ConfirmDeviceRequest withDeviceKey(String deviceKey) {
        this.deviceKey = deviceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceName")
    public String deviceName;
    public ConfirmDeviceRequest withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceSecretVerifierConfig")
    public DeviceSecretVerifierConfigType deviceSecretVerifierConfig;
    public ConfirmDeviceRequest withDeviceSecretVerifierConfig(DeviceSecretVerifierConfigType deviceSecretVerifierConfig) {
        this.deviceSecretVerifierConfig = deviceSecretVerifierConfig;
        return this;
    }
}