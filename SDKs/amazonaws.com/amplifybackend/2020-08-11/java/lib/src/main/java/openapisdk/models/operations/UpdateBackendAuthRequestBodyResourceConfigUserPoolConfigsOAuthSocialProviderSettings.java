package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
 * Describes third-party social federation configurations for allowing your users to sign in with OAuth.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Facebook")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig facebook;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withFacebook(openapisdk.models.shared.BackendAuthSocialProviderConfig facebook) {
        this.facebook = facebook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Google")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig google;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withGoogle(openapisdk.models.shared.BackendAuthSocialProviderConfig google) {
        this.google = google;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoginWithAmazon")
    public openapisdk.models.shared.BackendAuthSocialProviderConfig loginWithAmazon;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withLoginWithAmazon(openapisdk.models.shared.BackendAuthSocialProviderConfig loginWithAmazon) {
        this.loginWithAmazon = loginWithAmazon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignInWithApple")
    public openapisdk.models.shared.BackendAuthAppleProviderConfig signInWithApple;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings withSignInWithApple(openapisdk.models.shared.BackendAuthAppleProviderConfig signInWithApple) {
        this.signInWithApple = signInWithApple;
        return this;
    }
}