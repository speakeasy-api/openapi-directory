package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 {
    @JsonProperty("client_id")
    public String clientId;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_secret")
    public String clientSecret;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("grant_type")
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum grantType;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withGrantType(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("scope")
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum scope;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withScope(PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 withUsername(String username) {
        this.username = username;
        return this;
    }
}