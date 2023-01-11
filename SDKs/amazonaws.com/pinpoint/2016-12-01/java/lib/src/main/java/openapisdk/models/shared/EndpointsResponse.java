package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EndpointsResponse
 * Provides information about all the endpoints that are associated with a user ID.
**/
public class EndpointsResponse {
    @JsonProperty("Item")
    public EndpointResponse[] item;
    public EndpointsResponse withItem(EndpointResponse[] item) {
        this.item = item;
        return this;
    }
}