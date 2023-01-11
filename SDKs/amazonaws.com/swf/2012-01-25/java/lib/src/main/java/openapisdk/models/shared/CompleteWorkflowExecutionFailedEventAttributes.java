package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CompleteWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event.
**/
public class CompleteWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public CompleteWorkflowExecutionFailedCauseEnum cause;
    public CompleteWorkflowExecutionFailedEventAttributes withCause(CompleteWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public CompleteWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}