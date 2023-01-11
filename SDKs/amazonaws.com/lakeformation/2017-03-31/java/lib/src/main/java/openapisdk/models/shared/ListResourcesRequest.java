package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterConditionList")
    public FilterCondition[] filterConditionList;
    public ListResourcesRequest withFilterConditionList(FilterCondition[] filterConditionList) {
        this.filterConditionList = filterConditionList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListResourcesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResourcesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}