package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Point
 * Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
**/
public class Point {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("X")
    public Integer x;
    public Point withX(Integer x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Y")
    public Integer y;
    public Point withY(Integer y) {
        this.y = y;
        return this;
    }
}