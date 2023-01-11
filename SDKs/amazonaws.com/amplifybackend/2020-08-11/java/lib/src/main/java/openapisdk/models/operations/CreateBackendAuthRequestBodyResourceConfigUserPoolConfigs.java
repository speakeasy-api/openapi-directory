package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForgotPassword")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword forgotPassword;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withForgotPassword(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword forgotPassword) {
        this.forgotPassword = forgotPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mfa")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa mfa;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withMfa(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa mfa) {
        this.mfa = mfa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuth")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth oAuth;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withOAuth(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PasswordPolicy")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withPasswordPolicy(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
    @JsonProperty("RequiredSignUpAttributes")
    public java.util.Map<String, Object> requiredSignUpAttributes;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withRequiredSignUpAttributes(java.util.Map<String, Object> requiredSignUpAttributes) {
        this.requiredSignUpAttributes = requiredSignUpAttributes;
        return this;
    }
    @JsonProperty("SignInMethod")
    public java.util.Map<String, Object> signInMethod;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withSignInMethod(java.util.Map<String, Object> signInMethod) {
        this.signInMethod = signInMethod;
        return this;
    }
    @JsonProperty("UserPoolName")
    public java.util.Map<String, Object> userPoolName;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs withUserPoolName(java.util.Map<String, Object> userPoolName) {
        this.userPoolName = userPoolName;
        return this;
    }
}