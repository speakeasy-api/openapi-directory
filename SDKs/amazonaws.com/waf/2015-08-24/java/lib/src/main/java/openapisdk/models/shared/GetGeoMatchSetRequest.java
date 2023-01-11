package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGeoMatchSetRequest {
    @JsonProperty("GeoMatchSetId")
    public String geoMatchSetId;
    public GetGeoMatchSetRequest withGeoMatchSetId(String geoMatchSetId) {
        this.geoMatchSetId = geoMatchSetId;
        return this;
    }
}