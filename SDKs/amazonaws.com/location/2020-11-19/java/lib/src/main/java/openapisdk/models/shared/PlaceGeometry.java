package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceGeometry
 * Places uses a point geometry to specify a location or a Place.
**/
public class PlaceGeometry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Point")
    public Double[] point;
    public PlaceGeometry withPoint(Double[] point) {
        this.point = point;
        return this;
    }
}