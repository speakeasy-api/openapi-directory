package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeDeveloperIdentitiesResponse
 * Returned in response to a successful <code>MergeDeveloperIdentities</code> action.
**/
public class MergeDeveloperIdentitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public MergeDeveloperIdentitiesResponse withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
}