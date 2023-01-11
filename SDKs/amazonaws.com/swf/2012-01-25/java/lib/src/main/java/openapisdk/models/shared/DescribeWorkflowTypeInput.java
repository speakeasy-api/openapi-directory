package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkflowTypeInput {
    @JsonProperty("domain")
    public String domain;
    public DescribeWorkflowTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public DescribeWorkflowTypeInput withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}