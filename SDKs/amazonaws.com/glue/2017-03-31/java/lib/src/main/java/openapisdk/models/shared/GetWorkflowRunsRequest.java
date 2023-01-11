package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowRunsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGraph")
    public Boolean includeGraph;
    public GetWorkflowRunsRequest withIncludeGraph(Boolean includeGraph) {
        this.includeGraph = includeGraph;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetWorkflowRunsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetWorkflowRunsRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetWorkflowRunsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}