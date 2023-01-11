package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLogEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextSequenceToken")
    public String nextSequenceToken;
    public PutLogEventsResponse withNextSequenceToken(String nextSequenceToken) {
        this.nextSequenceToken = nextSequenceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectedLogEventsInfo")
    public RejectedLogEventsInfo rejectedLogEventsInfo;
    public PutLogEventsResponse withRejectedLogEventsInfo(RejectedLogEventsInfo rejectedLogEventsInfo) {
        this.rejectedLogEventsInfo = rejectedLogEventsInfo;
        return this;
    }
}