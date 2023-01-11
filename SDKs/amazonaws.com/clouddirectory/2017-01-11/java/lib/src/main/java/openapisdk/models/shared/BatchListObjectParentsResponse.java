package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListObjectParentsResponse
 * Represents the output of a <a>ListObjectParents</a> response operation.
**/
public class BatchListObjectParentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListObjectParentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParentLinks")
    public ObjectIdentifierAndLinkNameTuple[] parentLinks;
    public BatchListObjectParentsResponse withParentLinks(ObjectIdentifierAndLinkNameTuple[] parentLinks) {
        this.parentLinks = parentLinks;
        return this;
    }
}