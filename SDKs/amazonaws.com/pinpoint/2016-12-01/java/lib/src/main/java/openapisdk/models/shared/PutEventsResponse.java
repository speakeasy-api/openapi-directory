package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventsResponse {
    @JsonProperty("EventsResponse")
    public EventsResponse eventsResponse;
    public PutEventsResponse withEventsResponse(EventsResponse eventsResponse) {
        this.eventsResponse = eventsResponse;
        return this;
    }
}