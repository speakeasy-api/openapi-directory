package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteTrustResult
 * The result of a DeleteTrust request.
**/
public class DeleteTrustResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustId")
    public String trustId;
    public DeleteTrustResult withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}