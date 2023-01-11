package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CancelWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>CancelWorkflowExecutionFailed</code> event.
**/
public class CancelWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public CancelWorkflowExecutionFailedCauseEnum cause;
    public CancelWorkflowExecutionFailedEventAttributes withCause(CancelWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public CancelWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}