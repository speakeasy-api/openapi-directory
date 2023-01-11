package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGeoMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoMatchSet")
    public GeoMatchSet geoMatchSet;
    public GetGeoMatchSetResponse withGeoMatchSet(GeoMatchSet geoMatchSet) {
        this.geoMatchSet = geoMatchSet;
        return this;
    }
}