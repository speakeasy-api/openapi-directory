package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventsResponse
 * Provides information about endpoints and the events that they're associated with.
**/
public class EventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Results")
    public java.util.Map<String, ItemResponse> results;
    public EventsResponse withResults(java.util.Map<String, ItemResponse> results) {
        this.results = results;
        return this;
    }
}