package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListOutgoingTypedLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListOutgoingTypedLinksResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TypedLinkSpecifiers")
    public TypedLinkSpecifier[] typedLinkSpecifiers;
    public ListOutgoingTypedLinksResponse withTypedLinkSpecifiers(TypedLinkSpecifier[] typedLinkSpecifiers) {
        this.typedLinkSpecifiers = typedLinkSpecifiers;
        return this;
    }
}