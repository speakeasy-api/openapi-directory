package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignalWorkflowExecutionInput {
    @JsonProperty("domain")
    public String domain;
    public SignalWorkflowExecutionInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public SignalWorkflowExecutionInput withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public SignalWorkflowExecutionInput withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("signalName")
    public String signalName;
    public SignalWorkflowExecutionInput withSignalName(String signalName) {
        this.signalName = signalName;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public SignalWorkflowExecutionInput withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}