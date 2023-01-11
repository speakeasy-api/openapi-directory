package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostLocationsRequestBodyCoordinates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public PostLocationsRequestBodyCoordinates withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public PostLocationsRequestBodyCoordinates withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}