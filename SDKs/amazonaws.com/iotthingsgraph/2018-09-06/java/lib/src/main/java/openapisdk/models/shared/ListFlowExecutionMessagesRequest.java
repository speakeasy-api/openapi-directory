package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlowExecutionMessagesRequest {
    @JsonProperty("flowExecutionId")
    public String flowExecutionId;
    public ListFlowExecutionMessagesRequest withFlowExecutionId(String flowExecutionId) {
        this.flowExecutionId = flowExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListFlowExecutionMessagesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFlowExecutionMessagesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}