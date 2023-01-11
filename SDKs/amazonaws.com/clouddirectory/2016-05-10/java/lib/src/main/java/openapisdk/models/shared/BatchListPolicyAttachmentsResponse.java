package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListPolicyAttachmentsResponse
 * Represents the output of a <a>ListPolicyAttachments</a> response operation.
**/
public class BatchListPolicyAttachmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListPolicyAttachmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifiers")
    public String[] objectIdentifiers;
    public BatchListPolicyAttachmentsResponse withObjectIdentifiers(String[] objectIdentifiers) {
        this.objectIdentifiers = objectIdentifiers;
        return this;
    }
}