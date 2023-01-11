package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Geometry
 * Information about where an object (<a>DetectCustomLabels</a>) or text (<a>DetectText</a>) is located on an image.
**/
public class Geometry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public Geometry withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Polygon")
    public Point[] polygon;
    public Geometry withPolygon(Point[] polygon) {
        this.polygon = polygon;
        return this;
    }
}