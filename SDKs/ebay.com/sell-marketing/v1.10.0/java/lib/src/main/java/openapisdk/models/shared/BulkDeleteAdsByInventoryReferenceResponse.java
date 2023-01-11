package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkDeleteAdsByInventoryReferenceResponse
 * This type defines a container that lists the ads that bulkDeleteAdsByInventoryReference deleted.
**/
public class BulkDeleteAdsByInventoryReferenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public DeleteAdsByInventoryReferenceResponse[] responses;
    public BulkDeleteAdsByInventoryReferenceResponse withResponses(DeleteAdsByInventoryReferenceResponse[] responses) {
        this.responses = responses;
        return this;
    }
}