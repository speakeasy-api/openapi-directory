package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequestCancelWorkflowExecutionInput {
    @JsonProperty("domain")
    public String domain;
    public RequestCancelWorkflowExecutionInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public RequestCancelWorkflowExecutionInput withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public RequestCancelWorkflowExecutionInput withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}