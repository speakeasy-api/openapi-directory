package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Point
 * <p>The X and Y coordinates of a point on a document page. The X and Y values that are returned are ratios of the overall document page size. For example, if the input document is 700 x 200 and the operation returns X=0.5 and Y=0.25, then the point is at the (350,50) pixel coordinate on the document page.</p> <p>An array of <code>Point</code> objects, <code>Polygon</code>, is returned by <a>DetectDocumentText</a>. <code>Polygon</code> represents a fine-grained polygon around detected text. For more information, see Geometry in the Amazon Textract Developer Guide. </p>
**/
public class Point {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("X")
    public Float x;
    public Point withX(Float x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Y")
    public Float y;
    public Point withY(Float y) {
        this.y = y;
        return this;
    }
}