package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrossRegionCopyDeprecateRule
 * Specifies an AMI deprecation rule for cross-Region AMI copies created by a cross-Region copy rule.
**/
public class CrossRegionCopyDeprecateRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public CrossRegionCopyDeprecateRule withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalUnit")
    public RetentionIntervalUnitValuesEnum intervalUnit;
    public CrossRegionCopyDeprecateRule withIntervalUnit(RetentionIntervalUnitValuesEnum intervalUnit) {
        this.intervalUnit = intervalUnit;
        return this;
    }
}