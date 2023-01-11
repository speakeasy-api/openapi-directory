package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Scale
 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
**/
public class Scale {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public ScaleUnitEnum unit;
    public Scale withUnit(ScaleUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public Scale withValue(Double value) {
        this.value = value;
        return this;
    }
}