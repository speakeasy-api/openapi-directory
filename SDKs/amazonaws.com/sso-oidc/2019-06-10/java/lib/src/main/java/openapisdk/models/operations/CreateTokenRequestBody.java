package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTokenRequestBody {
    @JsonProperty("clientId")
    public String clientId;
    public CreateTokenRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public CreateTokenRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CreateTokenRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("deviceCode")
    public String deviceCode;
    public CreateTokenRequestBody withDeviceCode(String deviceCode) {
        this.deviceCode = deviceCode;
        return this;
    }
    @JsonProperty("grantType")
    public String grantType;
    public CreateTokenRequestBody withGrantType(String grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirectUri")
    public String redirectUri;
    public CreateTokenRequestBody withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public CreateTokenRequestBody withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String[] scope;
    public CreateTokenRequestBody withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
}