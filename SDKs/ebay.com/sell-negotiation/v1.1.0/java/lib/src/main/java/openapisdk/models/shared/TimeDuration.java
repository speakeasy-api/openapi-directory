package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeDuration
 * A complex type that specifies a period of time using a specified time-measurement unit.
**/
public class TimeDuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public TimeDuration withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Integer value;
    public TimeDuration withValue(Integer value) {
        this.value = value;
        return this;
    }
}