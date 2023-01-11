package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResponse
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
**/
public class SearchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facets")
    public java.util.Map<String, BucketInfo> facets;
    public SearchResponse withFacets(java.util.Map<String, BucketInfo> facets) {
        this.facets = facets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hits")
    public Hits hits;
    public SearchResponse withHits(Hits hits) {
        this.hits = hits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public java.util.Map<String, FieldStats> stats;
    public SearchResponse withStats(java.util.Map<String, FieldStats> stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SearchStatus status;
    public SearchResponse withStatus(SearchStatus status) {
        this.status = status;
        return this;
    }
}