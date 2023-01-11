package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterDeviceRequestBody {
    @JsonProperty("Platform")
    public RegisterDeviceRequestBodyPlatformEnum platform;
    public RegisterDeviceRequestBody withPlatform(RegisterDeviceRequestBodyPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonProperty("Token")
    public String token;
    public RegisterDeviceRequestBody withToken(String token) {
        this.token = token;
        return this;
    }
}