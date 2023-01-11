package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointItemResponse")
    public EndpointItemResponse endpointItemResponse;
    public ItemResponse withEndpointItemResponse(EndpointItemResponse endpointItemResponse) {
        this.endpointItemResponse = endpointItemResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventsItemResponse")
    public java.util.Map<String, EventItemResponse> eventsItemResponse;
    public ItemResponse withEventsItemResponse(java.util.Map<String, EventItemResponse> eventsItemResponse) {
        this.eventsItemResponse = eventsItemResponse;
        return this;
    }
}