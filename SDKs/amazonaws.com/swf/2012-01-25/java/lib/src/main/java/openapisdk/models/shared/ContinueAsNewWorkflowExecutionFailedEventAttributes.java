package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ContinueAsNewWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event.
**/
public class ContinueAsNewWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public ContinueAsNewWorkflowExecutionFailedCauseEnum cause;
    public ContinueAsNewWorkflowExecutionFailedEventAttributes withCause(ContinueAsNewWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public ContinueAsNewWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}