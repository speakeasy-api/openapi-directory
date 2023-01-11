package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionCanceledEventAttributes
 * Provides the details of the <code>WorkflowExecutionCanceled</code> event.
**/
public class WorkflowExecutionCanceledEventAttributes {
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public WorkflowExecutionCanceledEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public WorkflowExecutionCanceledEventAttributes withDetails(String details) {
        this.details = details;
        return this;
    }
}