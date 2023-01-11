package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetUserPoolMfaConfigRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaConfiguration")
    public UserPoolMfaTypeEnum mfaConfiguration;
    public SetUserPoolMfaConfigRequest withMfaConfiguration(UserPoolMfaTypeEnum mfaConfiguration) {
        this.mfaConfiguration = mfaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMfaConfiguration")
    public SmsMfaConfigType smsMfaConfiguration;
    public SetUserPoolMfaConfigRequest withSmsMfaConfiguration(SmsMfaConfigType smsMfaConfiguration) {
        this.smsMfaConfiguration = smsMfaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftwareTokenMfaConfiguration")
    public SoftwareTokenMfaConfigType softwareTokenMfaConfiguration;
    public SetUserPoolMfaConfigRequest withSoftwareTokenMfaConfiguration(SoftwareTokenMfaConfigType softwareTokenMfaConfiguration) {
        this.softwareTokenMfaConfiguration = softwareTokenMfaConfiguration;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public SetUserPoolMfaConfigRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}