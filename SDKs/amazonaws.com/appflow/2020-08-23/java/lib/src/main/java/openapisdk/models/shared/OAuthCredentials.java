package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OAuthCredentials
 *  The OAuth credentials required for OAuth type authentication. 
**/
public class OAuthCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public OAuthCredentials withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("clientId")
    public String clientId;
    public OAuthCredentials withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("clientSecret")
    public String clientSecret;
    public OAuthCredentials withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oAuthRequest")
    public ConnectorOAuthRequest oAuthRequest;
    public OAuthCredentials withOAuthRequest(ConnectorOAuthRequest oAuthRequest) {
        this.oAuthRequest = oAuthRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public OAuthCredentials withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}