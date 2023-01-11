package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeStateMachineForExecutionInput {
    @JsonProperty("executionArn")
    public String executionArn;
    public DescribeStateMachineForExecutionInput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
}