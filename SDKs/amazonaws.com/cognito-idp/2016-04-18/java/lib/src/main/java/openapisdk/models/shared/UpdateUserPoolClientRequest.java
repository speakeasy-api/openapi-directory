package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserPoolClientRequest
 * Represents the request to update the user pool client.
**/
public class UpdateUserPoolClientRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessTokenValidity")
    public Long accessTokenValidity;
    public UpdateUserPoolClientRequest withAccessTokenValidity(Long accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthFlows")
    public OAuthFlowTypeEnum[] allowedOAuthFlows;
    public UpdateUserPoolClientRequest withAllowedOAuthFlows(OAuthFlowTypeEnum[] allowedOAuthFlows) {
        this.allowedOAuthFlows = allowedOAuthFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthFlowsUserPoolClient")
    public Boolean allowedOAuthFlowsUserPoolClient;
    public UpdateUserPoolClientRequest withAllowedOAuthFlowsUserPoolClient(Boolean allowedOAuthFlowsUserPoolClient) {
        this.allowedOAuthFlowsUserPoolClient = allowedOAuthFlowsUserPoolClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthScopes")
    public String[] allowedOAuthScopes;
    public UpdateUserPoolClientRequest withAllowedOAuthScopes(String[] allowedOAuthScopes) {
        this.allowedOAuthScopes = allowedOAuthScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsConfiguration")
    public AnalyticsConfigurationType analyticsConfiguration;
    public UpdateUserPoolClientRequest withAnalyticsConfiguration(AnalyticsConfigurationType analyticsConfiguration) {
        this.analyticsConfiguration = analyticsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallbackURLs")
    public String[] callbackURLs;
    public UpdateUserPoolClientRequest withCallbackUrLs(String[] callbackURLs) {
        this.callbackURLs = callbackURLs;
        return this;
    }
    @JsonProperty("ClientId")
    public String clientId;
    public UpdateUserPoolClientRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientName")
    public String clientName;
    public UpdateUserPoolClientRequest withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRedirectURI")
    public String defaultRedirectURI;
    public UpdateUserPoolClientRequest withDefaultRedirectUri(String defaultRedirectURI) {
        this.defaultRedirectURI = defaultRedirectURI;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableTokenRevocation")
    public Boolean enableTokenRevocation;
    public UpdateUserPoolClientRequest withEnableTokenRevocation(Boolean enableTokenRevocation) {
        this.enableTokenRevocation = enableTokenRevocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExplicitAuthFlows")
    public ExplicitAuthFlowsTypeEnum[] explicitAuthFlows;
    public UpdateUserPoolClientRequest withExplicitAuthFlows(ExplicitAuthFlowsTypeEnum[] explicitAuthFlows) {
        this.explicitAuthFlows = explicitAuthFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdTokenValidity")
    public Long idTokenValidity;
    public UpdateUserPoolClientRequest withIdTokenValidity(Long idTokenValidity) {
        this.idTokenValidity = idTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogoutURLs")
    public String[] logoutURLs;
    public UpdateUserPoolClientRequest withLogoutUrLs(String[] logoutURLs) {
        this.logoutURLs = logoutURLs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreventUserExistenceErrors")
    public PreventUserExistenceErrorTypesEnum preventUserExistenceErrors;
    public UpdateUserPoolClientRequest withPreventUserExistenceErrors(PreventUserExistenceErrorTypesEnum preventUserExistenceErrors) {
        this.preventUserExistenceErrors = preventUserExistenceErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadAttributes")
    public String[] readAttributes;
    public UpdateUserPoolClientRequest withReadAttributes(String[] readAttributes) {
        this.readAttributes = readAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshTokenValidity")
    public Long refreshTokenValidity;
    public UpdateUserPoolClientRequest withRefreshTokenValidity(Long refreshTokenValidity) {
        this.refreshTokenValidity = refreshTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportedIdentityProviders")
    public String[] supportedIdentityProviders;
    public UpdateUserPoolClientRequest withSupportedIdentityProviders(String[] supportedIdentityProviders) {
        this.supportedIdentityProviders = supportedIdentityProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenValidityUnits")
    public TokenValidityUnitsType tokenValidityUnits;
    public UpdateUserPoolClientRequest withTokenValidityUnits(TokenValidityUnitsType tokenValidityUnits) {
        this.tokenValidityUnits = tokenValidityUnits;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UpdateUserPoolClientRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WriteAttributes")
    public String[] writeAttributes;
    public UpdateUserPoolClientRequest withWriteAttributes(String[] writeAttributes) {
        this.writeAttributes = writeAttributes;
        return this;
    }
}