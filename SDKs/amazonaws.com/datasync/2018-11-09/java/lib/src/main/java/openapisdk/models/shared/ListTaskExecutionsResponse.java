package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTaskExecutionsResponse
 * ListTaskExecutionsResponse
**/
public class ListTaskExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTaskExecutionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskExecutions")
    public TaskExecutionListEntry[] taskExecutions;
    public ListTaskExecutionsResponse withTaskExecutions(TaskExecutionListEntry[] taskExecutions) {
        this.taskExecutions = taskExecutions;
        return this;
    }
}