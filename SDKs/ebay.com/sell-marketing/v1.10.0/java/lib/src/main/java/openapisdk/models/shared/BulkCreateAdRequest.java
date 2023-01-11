package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkCreateAdRequest
 * This type defines the fields for the create ads in bulk by listing IDs.
**/
public class BulkCreateAdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public CreateAdRequest[] requests;
    public BulkCreateAdRequest withRequests(CreateAdRequest[] requests) {
        this.requests = requests;
        return this;
    }
}