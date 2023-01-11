package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoLocation
 * Provides the latitude and longitude coordinates of a location.
**/
public class GeoLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lat")
    public Double lat;
    public GeoLocation withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lon")
    public Double lon;
    public GeoLocation withLon(Double lon) {
        this.lon = lon;
        return this;
    }
}