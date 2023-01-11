package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumberAttributeConstraintsType
 * The minimum and maximum value of an attribute that is of the number data type.
**/
public class NumberAttributeConstraintsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxValue")
    public String maxValue;
    public NumberAttributeConstraintsType withMaxValue(String maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinValue")
    public String minValue;
    public NumberAttributeConstraintsType withMinValue(String minValue) {
        this.minValue = minValue;
        return this;
    }
}