package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMlTransformsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public TransformFilterCriteria filter;
    public GetMlTransformsRequest withFilter(TransformFilterCriteria filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetMlTransformsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetMlTransformsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public TransformSortCriteria sort;
    public GetMlTransformsRequest withSort(TransformSortCriteria sort) {
        this.sort = sort;
        return this;
    }
}