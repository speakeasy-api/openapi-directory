package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowExecutionTimedOutEventAttributes
 * Provides the details of the <code>WorkflowExecutionTimedOut</code> event.
**/
public class WorkflowExecutionTimedOutEventAttributes {
    @JsonProperty("childPolicy")
    public ChildPolicyEnum childPolicy;
    public WorkflowExecutionTimedOutEventAttributes withChildPolicy(ChildPolicyEnum childPolicy) {
        this.childPolicy = childPolicy;
        return this;
    }
    @JsonProperty("timeoutType")
    public WorkflowExecutionTimeoutTypeEnum timeoutType;
    public WorkflowExecutionTimedOutEventAttributes withTimeoutType(WorkflowExecutionTimeoutTypeEnum timeoutType) {
        this.timeoutType = timeoutType;
        return this;
    }
}