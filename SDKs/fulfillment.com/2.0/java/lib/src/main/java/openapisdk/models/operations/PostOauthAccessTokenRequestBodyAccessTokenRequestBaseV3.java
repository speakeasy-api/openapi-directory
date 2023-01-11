package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 {
    @JsonProperty("client_id")
    public String clientId;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_secret")
    public String clientSecret;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("grant_type")
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum grantType;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 withGrantType(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("refresh_token")
    public String refreshToken;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonProperty("scope")
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum scope;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 withScope(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}