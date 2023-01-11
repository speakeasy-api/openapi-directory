package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestCancelExternalWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event.
**/
public class RequestCancelExternalWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public RequestCancelExternalWorkflowExecutionFailedCauseEnum cause;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withCause(RequestCancelExternalWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("initiatedEventId")
    public Long initiatedEventId;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withInitiatedEventId(Long initiatedEventId) {
        this.initiatedEventId = initiatedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public RequestCancelExternalWorkflowExecutionFailedEventAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}