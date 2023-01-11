package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListIndex
 * Lists objects attached to the specified index inside a <a>BatchRead</a> operation. For more information, see <a>ListIndex</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchListIndex {
    @JsonProperty("IndexReference")
    public ObjectReference indexReference;
    public BatchListIndex withIndexReference(ObjectReference indexReference) {
        this.indexReference = indexReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public BatchListIndex withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListIndex withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangesOnIndexedValues")
    public ObjectAttributeRange[] rangesOnIndexedValues;
    public BatchListIndex withRangesOnIndexedValues(ObjectAttributeRange[] rangesOnIndexedValues) {
        this.rangesOnIndexedValues = rangesOnIndexedValues;
        return this;
    }
}