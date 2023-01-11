package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigs
 * Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForgotPassword")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword forgotPassword;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withForgotPassword(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword forgotPassword) {
        this.forgotPassword = forgotPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mfa")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfa mfa;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withMfa(GetBackendAuthResponseResourceConfigUserPoolConfigsMfa mfa) {
        this.mfa = mfa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuth")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth oAuth;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withOAuth(GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth oAuth) {
        this.oAuth = oAuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PasswordPolicy")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withPasswordPolicy(GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy passwordPolicy) {
        this.passwordPolicy = passwordPolicy;
        return this;
    }
    @JsonProperty("RequiredSignUpAttributes")
    public java.util.Map<String, Object> requiredSignUpAttributes;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withRequiredSignUpAttributes(java.util.Map<String, Object> requiredSignUpAttributes) {
        this.requiredSignUpAttributes = requiredSignUpAttributes;
        return this;
    }
    @JsonProperty("SignInMethod")
    public java.util.Map<String, Object> signInMethod;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withSignInMethod(java.util.Map<String, Object> signInMethod) {
        this.signInMethod = signInMethod;
        return this;
    }
    @JsonProperty("UserPoolName")
    public java.util.Map<String, Object> userPoolName;
    public GetBackendAuthResponseResourceConfigUserPoolConfigs withUserPoolName(java.util.Map<String, Object> userPoolName) {
        this.userPoolName = userPoolName;
        return this;
    }
}