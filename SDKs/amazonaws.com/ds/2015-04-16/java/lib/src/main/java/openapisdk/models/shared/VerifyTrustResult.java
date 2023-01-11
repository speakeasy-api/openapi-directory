package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyTrustResult
 * Result of a VerifyTrust request.
**/
public class VerifyTrustResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustId")
    public String trustId;
    public VerifyTrustResult withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}