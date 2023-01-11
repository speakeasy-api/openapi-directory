package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TerminateWorkflowExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childPolicy")
    public ChildPolicyEnum childPolicy;
    public TerminateWorkflowExecutionInput withChildPolicy(ChildPolicyEnum childPolicy) {
        this.childPolicy = childPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public TerminateWorkflowExecutionInput withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public TerminateWorkflowExecutionInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public TerminateWorkflowExecutionInput withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public TerminateWorkflowExecutionInput withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public TerminateWorkflowExecutionInput withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}