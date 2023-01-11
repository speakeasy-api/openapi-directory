package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetUserPoolMfaConfigResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaConfiguration")
    public UserPoolMfaTypeEnum mfaConfiguration;
    public SetUserPoolMfaConfigResponse withMfaConfiguration(UserPoolMfaTypeEnum mfaConfiguration) {
        this.mfaConfiguration = mfaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMfaConfiguration")
    public SmsMfaConfigType smsMfaConfiguration;
    public SetUserPoolMfaConfigResponse withSmsMfaConfiguration(SmsMfaConfigType smsMfaConfiguration) {
        this.smsMfaConfiguration = smsMfaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftwareTokenMfaConfiguration")
    public SoftwareTokenMfaConfigType softwareTokenMfaConfiguration;
    public SetUserPoolMfaConfigResponse withSoftwareTokenMfaConfiguration(SoftwareTokenMfaConfigType softwareTokenMfaConfiguration) {
        this.softwareTokenMfaConfiguration = softwareTokenMfaConfiguration;
        return this;
    }
}