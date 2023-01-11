package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsMfa
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsMfa {
    @JsonProperty("MFAMode")
    public MfaModeEnum mfaMode;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfa withMfaMode(MfaModeEnum mfaMode) {
        this.mfaMode = mfaMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings settings;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfa withSettings(GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings settings) {
        this.settings = settings;
        return this;
    }
}