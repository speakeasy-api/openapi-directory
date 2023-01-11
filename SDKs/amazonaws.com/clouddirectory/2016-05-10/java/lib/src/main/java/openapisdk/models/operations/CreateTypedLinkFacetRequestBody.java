package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTypedLinkFacetRequestBody {
    @JsonProperty("Facet")
    public CreateTypedLinkFacetRequestBodyFacet facet;
    public CreateTypedLinkFacetRequestBody withFacet(CreateTypedLinkFacetRequestBodyFacet facet) {
        this.facet = facet;
        return this;
    }
}