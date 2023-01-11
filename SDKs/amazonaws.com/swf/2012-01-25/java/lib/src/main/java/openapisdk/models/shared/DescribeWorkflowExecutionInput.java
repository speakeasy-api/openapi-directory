package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkflowExecutionInput {
    @JsonProperty("domain")
    public String domain;
    public DescribeWorkflowExecutionInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("execution")
    public WorkflowExecution execution;
    public DescribeWorkflowExecutionInput withExecution(WorkflowExecution execution) {
        this.execution = execution;
        return this;
    }
}