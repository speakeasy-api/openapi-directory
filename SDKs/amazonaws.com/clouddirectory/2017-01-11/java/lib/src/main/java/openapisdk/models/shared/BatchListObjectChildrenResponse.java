package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectChildrenResponse
 * Represents the output of a <a>ListObjectChildren</a> response operation.
**/
public class BatchListObjectChildrenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Children")
    public java.util.Map<String, String> children;
    public BatchListObjectChildrenResponse withChildren(java.util.Map<String, String> children) {
        this.children = children;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectChildrenResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}