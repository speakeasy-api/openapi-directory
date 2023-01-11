package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UndeprecateWorkflowTypeInput {
    @JsonProperty("domain")
    public String domain;
    public UndeprecateWorkflowTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public UndeprecateWorkflowTypeInput withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}