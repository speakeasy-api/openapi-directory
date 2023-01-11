package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimensions
 * This complex type defines the dimensions of a package to be shipped.
**/
public class Dimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public Dimensions withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public String length;
    public Dimensions withLength(String length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public Dimensions withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public Dimensions withWidth(String width) {
        this.width = width;
        return this;
    }
}