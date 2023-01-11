package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetUserMfaPreferenceRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public SetUserMfaPreferenceRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSMfaSettings")
    public SmsMfaSettingsType smsMfaSettings;
    public SetUserMfaPreferenceRequest withSmsMfaSettings(SmsMfaSettingsType smsMfaSettings) {
        this.smsMfaSettings = smsMfaSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SoftwareTokenMfaSettings")
    public SoftwareTokenMfaSettingsType softwareTokenMfaSettings;
    public SetUserMfaPreferenceRequest withSoftwareTokenMfaSettings(SoftwareTokenMfaSettingsType softwareTokenMfaSettings) {
        this.softwareTokenMfaSettings = softwareTokenMfaSettings;
        return this;
    }
}