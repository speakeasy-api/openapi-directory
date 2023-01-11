package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStreamingSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public StreamingSession session;
    public GetStreamingSessionResponse withSession(StreamingSession session) {
        this.session = session;
        return this;
    }
}