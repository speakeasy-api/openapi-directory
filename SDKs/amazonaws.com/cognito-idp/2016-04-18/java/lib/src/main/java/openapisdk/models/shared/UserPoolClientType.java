package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UserPoolClientType
 * Contains information about a user pool client.
**/
public class UserPoolClientType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessTokenValidity")
    public Long accessTokenValidity;
    public UserPoolClientType withAccessTokenValidity(Long accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthFlows")
    public OAuthFlowTypeEnum[] allowedOAuthFlows;
    public UserPoolClientType withAllowedOAuthFlows(OAuthFlowTypeEnum[] allowedOAuthFlows) {
        this.allowedOAuthFlows = allowedOAuthFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthFlowsUserPoolClient")
    public Boolean allowedOAuthFlowsUserPoolClient;
    public UserPoolClientType withAllowedOAuthFlowsUserPoolClient(Boolean allowedOAuthFlowsUserPoolClient) {
        this.allowedOAuthFlowsUserPoolClient = allowedOAuthFlowsUserPoolClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOAuthScopes")
    public String[] allowedOAuthScopes;
    public UserPoolClientType withAllowedOAuthScopes(String[] allowedOAuthScopes) {
        this.allowedOAuthScopes = allowedOAuthScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnalyticsConfiguration")
    public AnalyticsConfigurationType analyticsConfiguration;
    public UserPoolClientType withAnalyticsConfiguration(AnalyticsConfigurationType analyticsConfiguration) {
        this.analyticsConfiguration = analyticsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallbackURLs")
    public String[] callbackURLs;
    public UserPoolClientType withCallbackUrLs(String[] callbackURLs) {
        this.callbackURLs = callbackURLs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public UserPoolClientType withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientName")
    public String clientName;
    public UserPoolClientType withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecret")
    public String clientSecret;
    public UserPoolClientType withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public UserPoolClientType withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultRedirectURI")
    public String defaultRedirectURI;
    public UserPoolClientType withDefaultRedirectUri(String defaultRedirectURI) {
        this.defaultRedirectURI = defaultRedirectURI;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableTokenRevocation")
    public Boolean enableTokenRevocation;
    public UserPoolClientType withEnableTokenRevocation(Boolean enableTokenRevocation) {
        this.enableTokenRevocation = enableTokenRevocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExplicitAuthFlows")
    public ExplicitAuthFlowsTypeEnum[] explicitAuthFlows;
    public UserPoolClientType withExplicitAuthFlows(ExplicitAuthFlowsTypeEnum[] explicitAuthFlows) {
        this.explicitAuthFlows = explicitAuthFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdTokenValidity")
    public Long idTokenValidity;
    public UserPoolClientType withIdTokenValidity(Long idTokenValidity) {
        this.idTokenValidity = idTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public UserPoolClientType withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogoutURLs")
    public String[] logoutURLs;
    public UserPoolClientType withLogoutUrLs(String[] logoutURLs) {
        this.logoutURLs = logoutURLs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreventUserExistenceErrors")
    public PreventUserExistenceErrorTypesEnum preventUserExistenceErrors;
    public UserPoolClientType withPreventUserExistenceErrors(PreventUserExistenceErrorTypesEnum preventUserExistenceErrors) {
        this.preventUserExistenceErrors = preventUserExistenceErrors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadAttributes")
    public String[] readAttributes;
    public UserPoolClientType withReadAttributes(String[] readAttributes) {
        this.readAttributes = readAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshTokenValidity")
    public Long refreshTokenValidity;
    public UserPoolClientType withRefreshTokenValidity(Long refreshTokenValidity) {
        this.refreshTokenValidity = refreshTokenValidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportedIdentityProviders")
    public String[] supportedIdentityProviders;
    public UserPoolClientType withSupportedIdentityProviders(String[] supportedIdentityProviders) {
        this.supportedIdentityProviders = supportedIdentityProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenValidityUnits")
    public TokenValidityUnitsType tokenValidityUnits;
    public UserPoolClientType withTokenValidityUnits(TokenValidityUnitsType tokenValidityUnits) {
        this.tokenValidityUnits = tokenValidityUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UserPoolClientType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WriteAttributes")
    public String[] writeAttributes;
    public UserPoolClientType withWriteAttributes(String[] writeAttributes) {
        this.writeAttributes = writeAttributes;
        return this;
    }
}