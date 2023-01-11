package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceAuthorizationCodeResponse {
    @JsonProperty("device_code")
    public String deviceCode;
    public DeviceAuthorizationCodeResponse withDeviceCode(String deviceCode) {
        this.deviceCode = deviceCode;
        return this;
    }
    @JsonProperty("dl_masked_email")
    public String dlMaskedEmail;
    public DeviceAuthorizationCodeResponse withDlMaskedEmail(String dlMaskedEmail) {
        this.dlMaskedEmail = dlMaskedEmail;
        return this;
    }
    @JsonProperty("dl_masked_mobile")
    public Long dlMaskedMobile;
    public DeviceAuthorizationCodeResponse withDlMaskedMobile(Long dlMaskedMobile) {
        this.dlMaskedMobile = dlMaskedMobile;
        return this;
    }
    @JsonProperty("expires_in")
    public Long expiresIn;
    public DeviceAuthorizationCodeResponse withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
}