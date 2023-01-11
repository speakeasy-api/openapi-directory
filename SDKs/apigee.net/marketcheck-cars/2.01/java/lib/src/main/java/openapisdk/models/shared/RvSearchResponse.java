package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RvSearchResponse
 * RV search query response
**/
public class RvSearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public java.util.Map<String, Object> facets;
    public RvSearchResponse withFacets(java.util.Map<String, Object> facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listings")
    public RvBaseListing[] listings;
    public RvSearchResponse withListings(RvBaseListing[] listings) {
        this.listings = listings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_found")
    public Long numFound;
    public RvSearchResponse withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range_facets")
    public java.util.Map<String, Object> rangeFacets;
    public RvSearchResponse withRangeFacets(java.util.Map<String, Object> rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public java.util.Map<String, Object> stats;
    public RvSearchResponse withStats(java.util.Map<String, Object> stats) {
        this.stats = stats;
        return this;
    }
}