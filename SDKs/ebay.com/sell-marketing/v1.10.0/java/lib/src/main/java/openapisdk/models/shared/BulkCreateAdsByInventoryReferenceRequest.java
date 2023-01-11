package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkCreateAdsByInventoryReferenceRequest
 * This type defines the fields used to create ads in bulk by inventory reference IDs.
**/
public class BulkCreateAdsByInventoryReferenceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public CreateAdsByInventoryReferenceRequest[] requests;
    public BulkCreateAdsByInventoryReferenceRequest withRequests(CreateAdsByInventoryReferenceRequest[] requests) {
        this.requests = requests;
        return this;
    }
}