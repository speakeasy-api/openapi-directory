package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFacetAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public FacetAttribute[] attributes;
    public ListFacetAttributesResponse withAttributes(FacetAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFacetAttributesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}