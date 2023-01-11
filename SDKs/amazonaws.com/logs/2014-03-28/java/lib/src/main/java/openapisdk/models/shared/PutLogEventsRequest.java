package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutLogEventsRequest {
    @JsonProperty("logEvents")
    public InputLogEvent[] logEvents;
    public PutLogEventsRequest withLogEvents(InputLogEvent[] logEvents) {
        this.logEvents = logEvents;
        return this;
    }
    @JsonProperty("logGroupName")
    public String logGroupName;
    public PutLogEventsRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("logStreamName")
    public String logStreamName;
    public PutLogEventsRequest withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequenceToken")
    public String sequenceToken;
    public PutLogEventsRequest withSequenceToken(String sequenceToken) {
        this.sequenceToken = sequenceToken;
        return this;
    }
}