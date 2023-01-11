package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SetUserSettingsRequest
 * Represents the request to set user settings.
**/
public class SetUserSettingsRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public SetUserSettingsRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("MFAOptions")
    public MfaOptionType[] mfaOptions;
    public SetUserSettingsRequest withMfaOptions(MfaOptionType[] mfaOptions) {
        this.mfaOptions = mfaOptions;
        return this;
    }
}