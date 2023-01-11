package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventsRequestBody {
    @JsonProperty("EventsRequest")
    public PutEventsRequestBodyEventsRequest eventsRequest;
    public PutEventsRequestBody withEventsRequest(PutEventsRequestBodyEventsRequest eventsRequest) {
        this.eventsRequest = eventsRequest;
        return this;
    }
}