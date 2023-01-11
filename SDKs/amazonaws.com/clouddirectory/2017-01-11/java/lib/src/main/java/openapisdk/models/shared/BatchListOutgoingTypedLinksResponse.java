package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchListOutgoingTypedLinksResponse
 * Represents the output of a <a>ListOutgoingTypedLinks</a> response operation.
**/
public class BatchListOutgoingTypedLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public BatchListOutgoingTypedLinksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypedLinkSpecifiers")
    public TypedLinkSpecifier[] typedLinkSpecifiers;
    public BatchListOutgoingTypedLinksResponse withTypedLinkSpecifiers(TypedLinkSpecifier[] typedLinkSpecifiers) {
        this.typedLinkSpecifiers = typedLinkSpecifiers;
        return this;
    }
}