package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFindingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingCriteria")
    public ListFindingsRequestBodyFindingCriteria findingCriteria;
    public ListFindingsRequestBody withFindingCriteria(ListFindingsRequestBodyFindingCriteria findingCriteria) {
        this.findingCriteria = findingCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListFindingsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListFindingsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public ListFindingsRequestBodySortCriteria sortCriteria;
    public ListFindingsRequestBody withSortCriteria(ListFindingsRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}