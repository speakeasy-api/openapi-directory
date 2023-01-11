package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectChildren
 * Represents the output of a <a>ListObjectChildren</a> operation.
**/
public class BatchListObjectChildren {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public BatchListObjectChildren withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectChildren withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchListObjectChildren withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
}