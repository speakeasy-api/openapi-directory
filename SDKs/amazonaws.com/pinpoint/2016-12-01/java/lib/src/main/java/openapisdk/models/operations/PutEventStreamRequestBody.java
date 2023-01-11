package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutEventStreamRequestBody {
    @JsonProperty("WriteEventStream")
    public PutEventStreamRequestBodyWriteEventStream writeEventStream;
    public PutEventStreamRequestBody withWriteEventStream(PutEventStreamRequestBodyWriteEventStream writeEventStream) {
        this.writeEventStream = writeEventStream;
        return this;
    }
}