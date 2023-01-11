package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAgentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentIds")
    public String[] agentIds;
    public DescribeAgentsRequest withAgentIds(String[] agentIds) {
        this.agentIds = agentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public Filter[] filters;
    public DescribeAgentsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeAgentsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeAgentsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}