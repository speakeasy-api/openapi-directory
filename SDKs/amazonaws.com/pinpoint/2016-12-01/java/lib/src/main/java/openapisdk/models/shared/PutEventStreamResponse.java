package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventStreamResponse {
    @JsonProperty("EventStream")
    public EventStream eventStream;
    public PutEventStreamResponse withEventStream(EventStream eventStream) {
        this.eventStream = eventStream;
        return this;
    }
}