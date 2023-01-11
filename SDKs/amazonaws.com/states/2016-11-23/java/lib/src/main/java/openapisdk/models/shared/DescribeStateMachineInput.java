package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStateMachineInput {
    @JsonProperty("stateMachineArn")
    public String stateMachineArn;
    public DescribeStateMachineInput withStateMachineArn(String stateMachineArn) {
        this.stateMachineArn = stateMachineArn;
        return this;
    }
}