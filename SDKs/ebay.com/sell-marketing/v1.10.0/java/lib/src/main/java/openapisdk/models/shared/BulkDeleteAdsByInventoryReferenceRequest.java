package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkDeleteAdsByInventoryReferenceRequest
 * This type defines the request fields that bulkDeleteAdsByInventoryReference uses to delete ads in bulk.
**/
public class BulkDeleteAdsByInventoryReferenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public DeleteAdsByInventoryReferenceRequest[] requests;
    public BulkDeleteAdsByInventoryReferenceRequest withRequests(DeleteAdsByInventoryReferenceRequest[] requests) {
        this.requests = requests;
        return this;
    }
}