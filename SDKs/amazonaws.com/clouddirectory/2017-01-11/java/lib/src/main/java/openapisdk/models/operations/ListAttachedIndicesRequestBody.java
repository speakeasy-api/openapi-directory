package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAttachedIndicesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAttachedIndicesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAttachedIndicesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("TargetReference")
    public ListAttachedIndicesRequestBodyTargetReference targetReference;
    public ListAttachedIndicesRequestBody withTargetReference(ListAttachedIndicesRequestBodyTargetReference targetReference) {
        this.targetReference = targetReference;
        return this;
    }
}