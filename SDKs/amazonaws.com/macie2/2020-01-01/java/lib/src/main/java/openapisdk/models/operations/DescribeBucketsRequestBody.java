package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBucketsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criteria")
    public java.util.Map<String, openapisdk.models.shared.BucketCriteriaAdditionalProperties> criteria;
    public DescribeBucketsRequestBody withCriteria(java.util.Map<String, openapisdk.models.shared.BucketCriteriaAdditionalProperties> criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public DescribeBucketsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeBucketsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortCriteria")
    public DescribeBucketsRequestBodySortCriteria sortCriteria;
    public DescribeBucketsRequestBody withSortCriteria(DescribeBucketsRequestBodySortCriteria sortCriteria) {
        this.sortCriteria = sortCriteria;
        return this;
    }
}