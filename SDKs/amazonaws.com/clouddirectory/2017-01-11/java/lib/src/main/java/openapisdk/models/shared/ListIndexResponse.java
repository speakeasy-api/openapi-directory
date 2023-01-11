package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIndexResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexAttachments")
    public IndexAttachment[] indexAttachments;
    public ListIndexResponse withIndexAttachments(IndexAttachment[] indexAttachments) {
        this.indexAttachments = indexAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIndexResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}