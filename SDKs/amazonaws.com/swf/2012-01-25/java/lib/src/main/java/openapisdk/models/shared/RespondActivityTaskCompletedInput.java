package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RespondActivityTaskCompletedInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public RespondActivityTaskCompletedInput withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonProperty("taskToken")
    public String taskToken;
    public RespondActivityTaskCompletedInput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}