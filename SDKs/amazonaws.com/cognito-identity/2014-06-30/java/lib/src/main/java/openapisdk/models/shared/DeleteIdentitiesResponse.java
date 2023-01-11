package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteIdentitiesResponse
 * Returned in response to a successful <code>DeleteIdentities</code> operation.
**/
public class DeleteIdentitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedIdentityIds")
    public UnprocessedIdentityId[] unprocessedIdentityIds;
    public DeleteIdentitiesResponse withUnprocessedIdentityIds(UnprocessedIdentityId[] unprocessedIdentityIds) {
        this.unprocessedIdentityIds = unprocessedIdentityIds;
        return this;
    }
}