package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkAdResponse
 * This type defines the fields for the create ads in bulk response.
**/
public class BulkAdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public AdResponse[] responses;
    public BulkAdResponse withResponses(AdResponse[] responses) {
        this.responses = responses;
        return this;
    }
}