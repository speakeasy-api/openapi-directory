package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs
 * Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForgotPassword")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword forgotPassword;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs withForgotPassword(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword forgotPassword) {
        this.forgotPassword = forgotPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mfa")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa mfa;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs withMfa(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa mfa) {
        this.mfa = mfa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuth")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth oAuth;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs withOAuth(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PasswordPolicy")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs withPasswordPolicy(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
}