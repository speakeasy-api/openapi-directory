package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListIncomingTypedLinksResponse
 * Represents the output of a <a>ListIncomingTypedLinks</a> response operation.
**/
public class BatchListIncomingTypedLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkSpecifiers")
    public TypedLinkSpecifier[] linkSpecifiers;
    public BatchListIncomingTypedLinksResponse withLinkSpecifiers(TypedLinkSpecifier[] linkSpecifiers) {
        this.linkSpecifiers = linkSpecifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListIncomingTypedLinksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}