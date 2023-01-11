package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTypedLinkFacetNamesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FacetNames")
    public String[] facetNames;
    public ListTypedLinkFacetNamesResponse withFacetNames(String[] facetNames) {
        this.facetNames = facetNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTypedLinkFacetNamesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}