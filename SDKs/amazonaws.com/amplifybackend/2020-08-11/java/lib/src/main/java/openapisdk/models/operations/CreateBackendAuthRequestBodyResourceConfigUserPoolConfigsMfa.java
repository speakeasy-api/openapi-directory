package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
 * Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa {
    @JsonProperty("MFAMode")
    public openapisdk.models.shared.MfaModeEnum mfaMode;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa withMfaMode(openapisdk.models.shared.MfaModeEnum mfaMode) {
        this.mfaMode = mfaMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings settings;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa withSettings(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings settings) {
        this.settings = settings;
        return this;
    }
}