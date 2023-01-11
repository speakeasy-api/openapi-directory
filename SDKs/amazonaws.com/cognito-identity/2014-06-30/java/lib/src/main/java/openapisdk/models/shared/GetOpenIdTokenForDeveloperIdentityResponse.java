package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetOpenIdTokenForDeveloperIdentityResponse
 * Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.
**/
public class GetOpenIdTokenForDeveloperIdentityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public GetOpenIdTokenForDeveloperIdentityResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Token")
    public String token;
    public GetOpenIdTokenForDeveloperIdentityResponse withToken(String token) {
        this.token = token;
        return this;
    }
}