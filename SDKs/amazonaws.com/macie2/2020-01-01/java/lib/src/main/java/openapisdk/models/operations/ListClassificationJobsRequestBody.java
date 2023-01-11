package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClassificationJobsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterCriteria")
    public ListClassificationJobsRequestBodyFilterCriteria filterCriteria;
    public ListClassificationJobsRequestBody withFilterCriteria(ListClassificationJobsRequestBodyFilterCriteria filterCriteria) {
        this.filterCriteria = filterCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListClassificationJobsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListClassificationJobsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public ListClassificationJobsRequestBodySortCriteria sortCriteria;
    public ListClassificationJobsRequestBody withSortCriteria(ListClassificationJobsRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}