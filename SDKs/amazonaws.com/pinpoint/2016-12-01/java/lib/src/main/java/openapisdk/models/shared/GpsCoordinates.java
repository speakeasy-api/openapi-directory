package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GpsCoordinates
 * Specifies the GPS coordinates of a location.
**/
public class GpsCoordinates {
    @JsonProperty("Latitude")
    public Double latitude;
    public GpsCoordinates withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("Longitude")
    public Double longitude;
    public GpsCoordinates withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}