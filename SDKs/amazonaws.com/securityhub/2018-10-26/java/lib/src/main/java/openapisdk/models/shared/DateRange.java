package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateRange
 * A date range for the date filter.
**/
public class DateRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public DateRangeUnitEnum unit;
    public DateRange withUnit(DateRangeUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Long value;
    public DateRange withValue(Long value) {
        this.value = value;
        return this;
    }
}