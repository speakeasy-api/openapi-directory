package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GpsPointDimension
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
**/
public class GpsPointDimension {
    @JsonProperty("Coordinates")
    public GpsCoordinates coordinates;
    public GpsPointDimension withCoordinates(GpsCoordinates coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangeInKilometers")
    public Double rangeInKilometers;
    public GpsPointDimension withRangeInKilometers(Double rangeInKilometers) {
        this.rangeInKilometers = rangeInKilometers;
        return this;
    }
}