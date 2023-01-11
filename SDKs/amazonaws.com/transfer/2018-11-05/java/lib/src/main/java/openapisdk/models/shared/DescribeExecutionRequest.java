package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeExecutionRequest {
    @JsonProperty("ExecutionId")
    public String executionId;
    public DescribeExecutionRequest withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonProperty("WorkflowId")
    public String workflowId;
    public DescribeExecutionRequest withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}