package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkflowExecutionInfos
 * Contains a paginated list of information about workflow executions.
**/
public class WorkflowExecutionInfos {
    @JsonProperty("executionInfos")
    public WorkflowExecutionInfo[] executionInfos;
    public WorkflowExecutionInfos withExecutionInfos(WorkflowExecutionInfo[] executionInfos) {
        this.executionInfos = executionInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public WorkflowExecutionInfos withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}