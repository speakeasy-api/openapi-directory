package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActivityTaskOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public GetActivityTaskOutput withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskToken")
    public String taskToken;
    public GetActivityTaskOutput withTaskToken(String taskToken) {
        this.taskToken = taskToken;
        return this;
    }
}