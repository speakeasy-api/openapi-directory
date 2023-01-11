package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventsRequestBody {
    @JsonProperty("events")
    public openapisdk.models.shared.Event[] events;
    public PutEventsRequestBody withEvents(openapisdk.models.shared.Event[] events) {
        this.events = events;
        return this;
    }
}