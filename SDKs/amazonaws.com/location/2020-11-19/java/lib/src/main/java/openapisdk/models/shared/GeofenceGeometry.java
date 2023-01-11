package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeofenceGeometry
 * <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
**/
public class GeofenceGeometry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Polygon")
    public Double[][][] polygon;
    public GeofenceGeometry withPolygon(Double[][][] polygon) {
        this.polygon = polygon;
        return this;
    }
}