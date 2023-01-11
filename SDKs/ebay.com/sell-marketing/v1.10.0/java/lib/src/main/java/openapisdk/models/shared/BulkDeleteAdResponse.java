package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkDeleteAdResponse
 * This type defines a container that lists the ads that bulkDeleteAdsByListingId deleted.
**/
public class BulkDeleteAdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public DeleteAdResponse[] responses;
    public BulkDeleteAdResponse withResponses(DeleteAdResponse[] responses) {
        this.responses = responses;
        return this;
    }
}