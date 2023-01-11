package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FastRestoreRule
 * Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.
**/
public class FastRestoreRule {
    @JsonProperty("AvailabilityZones")
    public String[] availabilityZones;
    public FastRestoreRule withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public FastRestoreRule withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public FastRestoreRule withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalUnit")
    public RetentionIntervalUnitValuesEnum intervalUnit;
    public FastRestoreRule withIntervalUnit(RetentionIntervalUnitValuesEnum intervalUnit) {
        this.intervalUnit = intervalUnit;
        return this;
    }
}