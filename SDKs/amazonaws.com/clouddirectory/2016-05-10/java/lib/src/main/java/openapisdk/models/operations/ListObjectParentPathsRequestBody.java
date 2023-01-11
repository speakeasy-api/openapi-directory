package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListObjectParentPathsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListObjectParentPathsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListObjectParentPathsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ListObjectParentPathsRequestBodyObjectReference objectReference;
    public ListObjectParentPathsRequestBody withObjectReference(ListObjectParentPathsRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}