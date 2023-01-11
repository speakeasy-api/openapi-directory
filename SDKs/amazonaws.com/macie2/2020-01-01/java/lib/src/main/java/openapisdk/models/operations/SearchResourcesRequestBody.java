package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResourcesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketCriteria")
    public SearchResourcesRequestBodyBucketCriteria bucketCriteria;
    public SearchResourcesRequestBody withBucketCriteria(SearchResourcesRequestBodyBucketCriteria bucketCriteria) {
        this.bucketCriteria = bucketCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public SearchResourcesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public SearchResourcesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public SearchResourcesRequestBodySortCriteria sortCriteria;
    public SearchResourcesRequestBody withSortCriteria(SearchResourcesRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}