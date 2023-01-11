package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGeoMatchSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoMatchSets")
    public GeoMatchSetSummary[] geoMatchSets;
    public ListGeoMatchSetsResponse withGeoMatchSets(GeoMatchSetSummary[] geoMatchSets) {
        this.geoMatchSets = geoMatchSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListGeoMatchSetsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}