package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCredentialsForIdentityResponse
 * Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.
**/
public class GetCredentialsForIdentityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credentials")
    public Credentials credentials;
    public GetCredentialsForIdentityResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public GetCredentialsForIdentityResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
}