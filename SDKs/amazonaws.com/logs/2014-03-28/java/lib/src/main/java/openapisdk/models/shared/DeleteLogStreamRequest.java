package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteLogStreamRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public DeleteLogStreamRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("logStreamName")
    public String logStreamName;
    public DeleteLogStreamRequest withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
}