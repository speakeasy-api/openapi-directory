package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartHumanLoopResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HumanLoopArn")
    public String humanLoopArn;
    public StartHumanLoopResponse withHumanLoopArn(String humanLoopArn) {
        this.humanLoopArn = humanLoopArn;
        return this;
    }
}