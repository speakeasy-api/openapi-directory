package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkCreateAdsByInventoryReferenceResponse
 * This type defines the response fields used by the bulkCreateAdsByInventoryReference method.
**/
public class BulkCreateAdsByInventoryReferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public CreateAdsByInventoryReferenceResponse[] responses;
    public BulkCreateAdsByInventoryReferenceResponse withResponses(CreateAdsByInventoryReferenceResponse[] responses) {
        this.responses = responses;
        return this;
    }
}