package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public Stream stream;
    public GetStreamResponse withStream(Stream stream) {
        this.stream = stream;
        return this;
    }
}