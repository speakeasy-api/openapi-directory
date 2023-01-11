package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeExecutionInput {
    @JsonProperty("executionArn")
    public String executionArn;
    public DescribeExecutionInput withExecutionArn(String executionArn) {
        this.executionArn = executionArn;
        return this;
    }
}