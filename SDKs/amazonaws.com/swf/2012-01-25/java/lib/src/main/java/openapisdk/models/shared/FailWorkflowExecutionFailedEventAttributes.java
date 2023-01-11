package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FailWorkflowExecutionFailedEventAttributes
 * Provides the details of the <code>FailWorkflowExecutionFailed</code> event.
**/
public class FailWorkflowExecutionFailedEventAttributes {
    @JsonProperty("cause")
    public FailWorkflowExecutionFailedCauseEnum cause;
    public FailWorkflowExecutionFailedEventAttributes withCause(FailWorkflowExecutionFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public FailWorkflowExecutionFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
}