package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIndexRequestBody {
    @JsonProperty("IndexReference")
    public ListIndexRequestBodyIndexReference indexReference;
    public ListIndexRequestBody withIndexReference(ListIndexRequestBodyIndexReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListIndexRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIndexRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangesOnIndexedValues")
    public openapisdk.models.shared.ObjectAttributeRange[] rangesOnIndexedValues;
    public ListIndexRequestBody withRangesOnIndexedValues(openapisdk.models.shared.ObjectAttributeRange[] rangesOnIndexedValues) {
        this.rangesOnIndexedValues = rangesOnIndexedValues;
        return this;
    }
}