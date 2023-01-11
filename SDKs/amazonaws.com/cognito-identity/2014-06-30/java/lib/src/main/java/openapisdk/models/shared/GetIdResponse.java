package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIdResponse
 * Returned in response to a GetId request.
**/
public class GetIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public GetIdResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
}