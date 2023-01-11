package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEventStreamResponse {
    @JsonProperty("EventStream")
    public EventStream eventStream;
    public GetEventStreamResponse withEventStream(EventStream eventStream) {
        this.eventStream = eventStream;
        return this;
    }
}