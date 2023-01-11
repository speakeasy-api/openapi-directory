package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStreamKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamKey")
    public StreamKey streamKey;
    public GetStreamKeyResponse withStreamKey(StreamKey streamKey) {
        this.streamKey = streamKey;
        return this;
    }
}