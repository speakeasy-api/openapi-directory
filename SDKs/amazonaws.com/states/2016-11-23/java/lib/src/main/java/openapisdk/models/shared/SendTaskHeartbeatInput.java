package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendTaskHeartbeatInput {
    @JsonProperty("taskToken")
    public String taskToken;
    public SendTaskHeartbeatInput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}