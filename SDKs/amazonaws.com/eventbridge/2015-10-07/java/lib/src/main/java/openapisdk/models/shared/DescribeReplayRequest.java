package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeReplayRequest {
    @JsonProperty("ReplayName")
    public String replayName;
    public DescribeReplayRequest withReplayName(String replayName) {
        this.replayName = replayName;
        return this;
    }
}