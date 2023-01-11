package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIncomingTypedLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LinkSpecifiers")
    public TypedLinkSpecifier[] linkSpecifiers;
    public ListIncomingTypedLinksResponse withLinkSpecifiers(TypedLinkSpecifier[] linkSpecifiers) {
        this.linkSpecifiers = linkSpecifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListIncomingTypedLinksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}