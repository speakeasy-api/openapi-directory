package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOauthAccessTokenAccessTokenResponseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public PostOauthAccessTokenAccessTokenResponseV2 withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Long expiresIn;
    public PostOauthAccessTokenAccessTokenResponseV2 withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refresh_token")
    public String refreshToken;
    public PostOauthAccessTokenAccessTokenResponseV2 withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type")
    public String tokenType;
    public PostOauthAccessTokenAccessTokenResponseV2 withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}