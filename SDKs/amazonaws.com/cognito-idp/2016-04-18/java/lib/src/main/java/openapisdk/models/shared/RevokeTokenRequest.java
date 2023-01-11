package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RevokeTokenRequest {
    @JsonProperty("ClientId")
    public String clientId;
    public RevokeTokenRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientSecret")
    public String clientSecret;
    public RevokeTokenRequest withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonProperty("Token")
    public String token;
    public RevokeTokenRequest withToken(String token) {
        this.token = token;
        return this;
    }
}