package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainPrefix")
    public java.util.Map<String, Object> domainPrefix;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withDomainPrefix(java.util.Map<String, Object> domainPrefix) {
        this.domainPrefix = domainPrefix;
        return this;
    }
    @JsonProperty("OAuthGrantType")
    public java.util.Map<String, Object> oAuthGrantType;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withOAuthGrantType(java.util.Map<String, Object> oAuthGrantType) {
        this.oAuthGrantType = oAuthGrantType;
        return this;
    }
    @JsonProperty("OAuthScopes")
    public java.util.Map<String, Object> oAuthScopes;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withOAuthScopes(java.util.Map<String, Object> oAuthScopes) {
        this.oAuthScopes = oAuthScopes;
        return this;
    }
    @JsonProperty("RedirectSignInURIs")
    public java.util.Map<String, Object> redirectSignInURIs;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withRedirectSignInUrIs(java.util.Map<String, Object> redirectSignInURIs) {
        this.redirectSignInURIs = redirectSignInURIs;
        return this;
    }
    @JsonProperty("RedirectSignOutURIs")
    public java.util.Map<String, Object> redirectSignOutURIs;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withRedirectSignOutUrIs(java.util.Map<String, Object> redirectSignOutURIs) {
        this.redirectSignOutURIs = redirectSignOutURIs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SocialProviderSettings")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings socialProviderSettings;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth withSocialProviderSettings(GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings socialProviderSettings) {
        this.socialProviderSettings = socialProviderSettings;
        return this;
    }
}