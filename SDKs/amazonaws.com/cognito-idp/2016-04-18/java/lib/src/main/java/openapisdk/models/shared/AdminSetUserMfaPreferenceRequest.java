package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdminSetUserMfaPreferenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSMfaSettings")
    public SmsMfaSettingsType smsMfaSettings;
    public AdminSetUserMfaPreferenceRequest withSmsMfaSettings(SmsMfaSettingsType smsMfaSettings) {
        this.smsMfaSettings = smsMfaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftwareTokenMfaSettings")
    public SoftwareTokenMfaSettingsType softwareTokenMfaSettings;
    public AdminSetUserMfaPreferenceRequest withSoftwareTokenMfaSettings(SoftwareTokenMfaSettingsType softwareTokenMfaSettings) {
        this.softwareTokenMfaSettings = softwareTokenMfaSettings;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminSetUserMfaPreferenceRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminSetUserMfaPreferenceRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}