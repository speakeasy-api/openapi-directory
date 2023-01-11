package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuthenticateAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public AuthenticateAuthentication withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public AuthenticateAuthentication withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantType")
    public AuthenticateAuthenticationGrantTypeEnum grantType;
    public AuthenticateAuthentication withGrantType(AuthenticateAuthenticationGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonce")
    public Long nonce;
    public AuthenticateAuthentication withNonce(Long nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public AuthenticateAuthentication withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}