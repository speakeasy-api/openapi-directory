package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignalExternalWorkflowExecutionInitiatedEventAttributes
 * Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event.
**/
public class SignalExternalWorkflowExecutionInitiatedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("signalName")
    public String signalName;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withSignalName(String signalName) {
        this.signalName = signalName;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public SignalExternalWorkflowExecutionInitiatedEventAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}