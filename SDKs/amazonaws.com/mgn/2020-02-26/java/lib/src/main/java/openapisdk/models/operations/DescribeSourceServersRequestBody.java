package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeSourceServersRequestBody {
    @JsonProperty("filters")
    public DescribeSourceServersRequestBodyFilters filters;
    public DescribeSourceServersRequestBody withFilters(DescribeSourceServersRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeSourceServersRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeSourceServersRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}