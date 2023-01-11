package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MFAMode")
    public openapisdk.models.shared.MfaModeEnum mfaMode;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa withMfaMode(openapisdk.models.shared.MfaModeEnum mfaMode) {
        this.mfaMode = mfaMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings settings;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa withSettings(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings settings) {
        this.settings = settings;
        return this;
    }
}