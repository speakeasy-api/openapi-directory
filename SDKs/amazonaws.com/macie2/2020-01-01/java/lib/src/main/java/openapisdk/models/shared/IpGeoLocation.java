package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpGeoLocation
 * Provides geographic coordinates that indicate where a specified IP address originated from.
**/
public class IpGeoLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public IpGeoLocation withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lon")
    public Double lon;
    public IpGeoLocation withLon(Double lon) {
        this.lon = lon;
        return this;
    }
}