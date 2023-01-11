package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccessToken {
    @JsonProperty("client_id")
    public String clientId;
    public AccessToken withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_secret")
    public String clientSecret;
    public AccessToken withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AccessToken withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_verifier")
    public String codeVerifier;
    public AccessToken withCodeVerifier(String codeVerifier) {
        this.codeVerifier = codeVerifier;
        return this;
    }
    @JsonProperty("grant_type")
    public AccessTokenGrantTypeEnum grantType;
    public AccessToken withGrantType(AccessTokenGrantTypeEnum grantType) {
        this.grantType = grantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_uri")
    public String redirectUri;
    public AccessToken withRedirectUri(String redirectUri) {
        this.redirectUri = redirectUri;
        return this;
    }
}