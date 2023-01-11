package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccessTokenRequest {
    @JsonProperty("Token")
    public String token;
    public GetAccessTokenRequest withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TokenProperties")
    public String[] tokenProperties;
    public GetAccessTokenRequest withTokenProperties(String[] tokenProperties) {
        this.tokenProperties = tokenProperties;
        return this;
    }
}