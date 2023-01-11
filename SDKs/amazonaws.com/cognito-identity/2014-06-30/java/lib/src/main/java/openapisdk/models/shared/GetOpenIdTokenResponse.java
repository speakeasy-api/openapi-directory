package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOpenIdTokenResponse
 * Returned in response to a successful GetOpenIdToken request.
**/
public class GetOpenIdTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public GetOpenIdTokenResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Token")
    public String token;
    public GetOpenIdTokenResponse withToken(String token) {
        this.token = token;
        return this;
    }
}