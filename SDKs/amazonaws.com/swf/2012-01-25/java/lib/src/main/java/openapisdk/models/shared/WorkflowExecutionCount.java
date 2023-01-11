package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionCount
 * Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a> 
**/
public class WorkflowExecutionCount {
    @JsonProperty("count")
    public Long count;
    public WorkflowExecutionCount withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("truncated")
    public Boolean truncated;
    public WorkflowExecutionCount withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}