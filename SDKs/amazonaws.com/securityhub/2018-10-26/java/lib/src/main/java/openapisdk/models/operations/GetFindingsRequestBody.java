package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public GetFindingsRequestBodyFilters filters;
    public GetFindingsRequestBody withFilters(GetFindingsRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetFindingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetFindingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SortCriteria")
    public openapisdk.models.shared.SortCriterion[] sortCriteria;
    public GetFindingsRequestBody withSortCriteria(openapisdk.models.shared.SortCriterion[] sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}