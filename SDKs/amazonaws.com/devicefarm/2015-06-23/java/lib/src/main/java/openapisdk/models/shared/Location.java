package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Location
 * <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
**/
public class Location {
    @JsonProperty("latitude")
    public Double latitude;
    public Location withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public Location withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}