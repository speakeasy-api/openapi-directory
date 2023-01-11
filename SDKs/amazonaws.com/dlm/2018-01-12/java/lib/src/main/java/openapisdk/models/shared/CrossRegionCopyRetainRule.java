package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrossRegionCopyRetainRule
 * Specifies the retention rule for cross-Region snapshot copies.
**/
public class CrossRegionCopyRetainRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public CrossRegionCopyRetainRule withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalUnit")
    public RetentionIntervalUnitValuesEnum intervalUnit;
    public CrossRegionCopyRetainRule withIntervalUnit(RetentionIntervalUnitValuesEnum intervalUnit) {
        this.intervalUnit = intervalUnit;
        return this;
    }
}