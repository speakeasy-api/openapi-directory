package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTypedLinkFacetAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public TypedLinkAttributeDefinition[] attributes;
    public ListTypedLinkFacetAttributesResponse withAttributes(TypedLinkAttributeDefinition[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTypedLinkFacetAttributesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}