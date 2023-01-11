package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingSessionStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public StreamingSessionStream stream;
    public CreateStreamingSessionStreamResponse withStream(StreamingSessionStream stream) {
        this.stream = stream;
        return this;
    }
}