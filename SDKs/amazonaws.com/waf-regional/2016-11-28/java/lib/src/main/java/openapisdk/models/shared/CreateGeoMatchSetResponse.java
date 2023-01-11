package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGeoMatchSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateGeoMatchSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeoMatchSet")
    public GeoMatchSet geoMatchSet;
    public CreateGeoMatchSetResponse withGeoMatchSet(GeoMatchSet geoMatchSet) {
        this.geoMatchSet = geoMatchSet;
        return this;
    }
}