package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LegGeometry
 * Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.
**/
public class LegGeometry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineString")
    public Double[][] lineString;
    public LegGeometry withLineString(Double[][] lineString) {
        this.lineString = lineString;
        return this;
    }
}