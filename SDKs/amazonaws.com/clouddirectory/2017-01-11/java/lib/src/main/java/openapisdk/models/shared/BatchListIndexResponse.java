package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListIndexResponse
 * Represents the output of a <a>ListIndex</a> response operation.
**/
public class BatchListIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexAttachments")
    public IndexAttachment[] indexAttachments;
    public BatchListIndexResponse withIndexAttachments(IndexAttachment[] indexAttachments) {
        this.indexAttachments = indexAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListIndexResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}