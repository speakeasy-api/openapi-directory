package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelReplayRequest {
    @JsonProperty("ReplayName")
    public String replayName;
    public CancelReplayRequest withReplayName(String replayName) {
        this.replayName = replayName;
        return this;
    }
}