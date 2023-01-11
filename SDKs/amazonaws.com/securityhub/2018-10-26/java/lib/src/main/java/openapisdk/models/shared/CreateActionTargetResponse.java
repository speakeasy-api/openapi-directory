package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateActionTargetResponse {
    @JsonProperty("ActionTargetArn")
    public String actionTargetArn;
    public CreateActionTargetResponse withActionTargetArn(String actionTargetArn) {
        this.actionTargetArn = actionTargetArn;
        return this;
    }
}