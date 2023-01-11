package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFacetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Facet")
    public Facet facet;
    public GetFacetResponse withFacet(Facet facet) {
        this.facet = facet;
        return this;
    }
}