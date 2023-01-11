package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprecateWorkflowTypeInput {
    @JsonProperty("domain")
    public String domain;
    public DeprecateWorkflowTypeInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("workflowType")
    public WorkflowType workflowType;
    public DeprecateWorkflowTypeInput withWorkflowType(WorkflowType workflowType) {
        this.workflowType = workflowType;
        return this;
    }
}