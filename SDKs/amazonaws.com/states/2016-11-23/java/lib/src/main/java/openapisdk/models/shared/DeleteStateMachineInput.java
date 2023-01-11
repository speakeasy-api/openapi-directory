package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStateMachineInput {
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public DeleteStateMachineInput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
}