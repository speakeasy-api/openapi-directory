package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
 * The settings for using social providers to access your Amplify app.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Facebook")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig facebook;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withFacebook(openapisdk.models.shared.BackendAuthSocialProviderConfig facebook) {
        this.facebook = facebook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Google")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig google;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withGoogle(openapisdk.models.shared.BackendAuthSocialProviderConfig google) {
        this.google = google;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoginWithAmazon")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig loginWithAmazon;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withLoginWithAmazon(openapisdk.models.shared.BackendAuthSocialProviderConfig loginWithAmazon) {
        this.loginWithAmazon = loginWithAmazon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignInWithApple")
    public openapisdk.models.shared.BackendAuthAppleProviderConfig signInWithApple;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withSignInWithApple(openapisdk.models.shared.BackendAuthAppleProviderConfig signInWithApple) {
        this.signInWithApple = signInWithApple;
        return this;
    }
}