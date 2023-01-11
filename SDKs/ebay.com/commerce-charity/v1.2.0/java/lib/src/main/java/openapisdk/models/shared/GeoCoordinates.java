package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoCoordinates
 * Defines the format of a geographic coordinate.
**/
public class GeoCoordinates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public GeoCoordinates withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public GeoCoordinates withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}