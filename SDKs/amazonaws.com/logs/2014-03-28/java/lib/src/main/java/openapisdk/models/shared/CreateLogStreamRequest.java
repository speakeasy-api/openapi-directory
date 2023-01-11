package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateLogStreamRequest {
    @JsonProperty("logGroupName")
    public String logGroupName;
    public CreateLogStreamRequest withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonProperty("logStreamName")
    public String logStreamName;
    public CreateLogStreamRequest withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
}