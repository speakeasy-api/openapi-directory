package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
 * Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainPrefix")
    public java.util.Map<String, Object> domainPrefix;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withDomainPrefix(java.util.Map<String, Object> domainPrefix) {
        this.domainPrefix = domainPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuthGrantType")
    public java.util.Map<String, Object> oAuthGrantType;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withOAuthGrantType(java.util.Map<String, Object> oAuthGrantType) {
        this.oAuthGrantType = oAuthGrantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OAuthScopes")
    public java.util.Map<String, Object> oAuthScopes;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withOAuthScopes(java.util.Map<String, Object> oAuthScopes) {
        this.oAuthScopes = oAuthScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedirectSignInURIs")
    public java.util.Map<String, Object> redirectSignInURIs;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withRedirectSignInUrIs(java.util.Map<String, Object> redirectSignInURIs) {
        this.redirectSignInURIs = redirectSignInURIs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedirectSignOutURIs")
    public java.util.Map<String, Object> redirectSignOutURIs;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withRedirectSignOutUrIs(java.util.Map<String, Object> redirectSignOutURIs) {
        this.redirectSignOutURIs = redirectSignOutURIs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SocialProviderSettings")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings socialProviderSettings;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth withSocialProviderSettings(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings socialProviderSettings) {
        this.socialProviderSettings = socialProviderSettings;
        return this;
    }
}