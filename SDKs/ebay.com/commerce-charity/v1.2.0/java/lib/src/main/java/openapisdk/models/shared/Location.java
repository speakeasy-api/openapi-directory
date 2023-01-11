package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public Address address;
    public Location withAddress(Address address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geoCoordinates")
    public GeoCoordinates geoCoordinates;
    public Location withGeoCoordinates(GeoCoordinates geoCoordinates) {
        this.geoCoordinates = geoCoordinates;
        return this;
    }
}