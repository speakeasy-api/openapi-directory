package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClustersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public java.util.Map<String, String[]> filters;
    public DescribeClustersRequest withFilters(java.util.Map<String, String[]> filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeClustersRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeClustersRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}