package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMlTransformsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public TransformFilterCriteria filter;
    public ListMlTransformsRequest withFilter(TransformFilterCriteria filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListMlTransformsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMlTransformsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sort")
    public TransformSortCriteria sort;
    public ListMlTransformsRequest withSort(TransformSortCriteria sort) {
        this.sort = sort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public ListMlTransformsRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}