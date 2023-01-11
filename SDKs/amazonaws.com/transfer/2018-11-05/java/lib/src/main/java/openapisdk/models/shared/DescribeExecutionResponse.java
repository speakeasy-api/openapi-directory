package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeExecutionResponse {
    @JsonProperty("Execution")
    public DescribedExecution execution;
    public DescribeExecutionResponse withExecution(DescribedExecution execution) {
        this.execution = execution;
        return this;
    }
    @JsonProperty("WorkflowId")
    public String workflowId;
    public DescribeExecutionResponse withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}