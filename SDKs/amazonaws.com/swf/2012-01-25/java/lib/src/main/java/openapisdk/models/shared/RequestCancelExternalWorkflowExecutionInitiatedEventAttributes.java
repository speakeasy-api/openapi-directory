package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event.
**/
public class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public RequestCancelExternalWorkflowExecutionInitiatedEventAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}