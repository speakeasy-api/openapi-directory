package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetainRule
 * Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.
**/
public class RetainRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public RetainRule withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public RetainRule withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalUnit")
    public RetentionIntervalUnitValuesEnum intervalUnit;
    public RetainRule withIntervalUnit(RetentionIntervalUnitValuesEnum intervalUnit) {
        this.intervalUnit = intervalUnit;
        return this;
    }
}