package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendTaskSuccessInput {
    @JsonProperty("output")
    public String output;
    public SendTaskSuccessInput withOutput(String output) {
        this.output = output;
        return this;
    }
    @JsonProperty("taskToken")
    public String taskToken;
    public SendTaskSuccessInput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}