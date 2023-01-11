package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings
 * The settings for using social providers to access your Amplify app.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Facebook")
    public BackendAuthSocialProviderConfig facebook;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings withFacebook(BackendAuthSocialProviderConfig facebook) {
        this.facebook = facebook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Google")
    public BackendAuthSocialProviderConfig google;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings withGoogle(BackendAuthSocialProviderConfig google) {
        this.google = google;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoginWithAmazon")
    public BackendAuthSocialProviderConfig loginWithAmazon;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings withLoginWithAmazon(BackendAuthSocialProviderConfig loginWithAmazon) {
        this.loginWithAmazon = loginWithAmazon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignInWithApple")
    public BackendAuthAppleProviderConfig signInWithApple;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings withSignInWithApple(BackendAuthAppleProviderConfig signInWithApple) {
        this.signInWithApple = signInWithApple;
        return this;
    }
}