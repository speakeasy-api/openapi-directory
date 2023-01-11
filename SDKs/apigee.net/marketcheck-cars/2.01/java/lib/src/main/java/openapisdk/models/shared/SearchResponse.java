package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponse
 * Search query response
**/
public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public java.util.Map<String, Object> facets;
    public SearchResponse withFacets(java.util.Map<String, Object> facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listings")
    public BaseListing[] listings;
    public SearchResponse withListings(BaseListing[] listings) {
        this.listings = listings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_found")
    public Long numFound;
    public SearchResponse withNumFound(Long numFound) {
        this.numFound = numFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range_facets")
    public java.util.Map<String, Object> rangeFacets;
    public SearchResponse withRangeFacets(java.util.Map<String, Object> rangeFacets) {
        this.rangeFacets = rangeFacets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public java.util.Map<String, Object> stats;
    public SearchResponse withStats(java.util.Map<String, Object> stats) {
        this.stats = stats;
        return this;
    }
}