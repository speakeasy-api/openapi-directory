package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RefreshToken {
    @JsonProperty("client_id")
    public String clientId;
    public RefreshToken withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_secret")
    public String clientSecret;
    public RefreshToken withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("grant_type")
    public RefreshTokenGrantTypeEnum grantType;
    public RefreshToken withGrantType(RefreshTokenGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonProperty("refresh_token")
    public String refreshToken;
    public RefreshToken withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}