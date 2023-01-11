package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteActionTargetResponse {
    @JsonProperty("ActionTargetArn")
    public String actionTargetArn;
    public DeleteActionTargetResponse withActionTargetArn(String actionTargetArn) {
        this.actionTargetArn = actionTargetArn;
        return this;
    }
}