package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionCompletedEventAttributes
 * Provides the details of the <code>WorkflowExecutionCompleted</code> event.
**/
public class WorkflowExecutionCompletedEventAttributes {
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public WorkflowExecutionCompletedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public WorkflowExecutionCompletedEventAttributes withResult(String result) {
        this.result = result;
        return this;
    }
}