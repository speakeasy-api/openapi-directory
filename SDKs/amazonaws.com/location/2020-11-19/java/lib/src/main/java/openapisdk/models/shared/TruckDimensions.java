package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TruckDimensions
 * Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
public class TruckDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Height")
    public Double height;
    public TruckDimensions withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Length")
    public Double length;
    public TruckDimensions withLength(Double length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public DimensionUnitEnum unit;
    public TruckDimensions withUnit(DimensionUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Width")
    public Double width;
    public TruckDimensions withWidth(Double width) {
        this.width = width;
        return this;
    }
}