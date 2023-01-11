package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPolicyAttachmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPolicyAttachmentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifiers")
    public String[] objectIdentifiers;
    public ListPolicyAttachmentsResponse withObjectIdentifiers(String[] objectIdentifiers) {
        this.objectIdentifiers = objectIdentifiers;
        return this;
    }
}