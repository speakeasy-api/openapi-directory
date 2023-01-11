package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEventStreamResponse {
    @JsonProperty("EventStream")
    public EventStream eventStream;
    public DeleteEventStreamResponse withEventStream(EventStream eventStream) {
        this.eventStream = eventStream;
        return this;
    }
}