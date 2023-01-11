package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkDeleteAdRequest
 * This type defines the fields that the call uses to remove ads in bulk.
**/
public class BulkDeleteAdRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public DeleteAdRequest[] requests;
    public BulkDeleteAdRequest withRequests(DeleteAdRequest[] requests) {
        this.requests = requests;
        return this;
    }
}