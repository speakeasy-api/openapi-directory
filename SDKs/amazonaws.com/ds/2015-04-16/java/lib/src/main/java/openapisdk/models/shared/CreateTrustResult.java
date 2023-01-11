package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTrustResult
 * The result of a CreateTrust request.
**/
public class CreateTrustResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustId")
    public String trustId;
    public CreateTrustResult withTrustId(String trustId) {
        this.trustId = trustId;
        return this;
    }
}