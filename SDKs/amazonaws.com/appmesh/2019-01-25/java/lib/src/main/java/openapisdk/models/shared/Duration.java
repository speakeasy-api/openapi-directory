package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Duration
 * An object that represents a duration of time.
**/
public class Duration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public DurationUnitEnum unit;
    public Duration withUnit(DurationUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public Duration withValue(Long value) {
        this.value = value;
        return this;
    }
}