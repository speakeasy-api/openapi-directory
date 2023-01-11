package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListAttachedIndicesResponse
 * Represents the output of a <a>ListAttachedIndices</a> response operation.
**/
public class BatchListAttachedIndicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexAttachments")
    public IndexAttachment[] indexAttachments;
    public BatchListAttachedIndicesResponse withIndexAttachments(IndexAttachment[] indexAttachments) {
        this.indexAttachments = indexAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListAttachedIndicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}