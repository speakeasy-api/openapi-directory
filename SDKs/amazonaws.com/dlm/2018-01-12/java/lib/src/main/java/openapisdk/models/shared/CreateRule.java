package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRule
 * <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
**/
public class CreateRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CronExpression")
    public String cronExpression;
    public CreateRule withCronExpression(String cronExpression) {
        this.cronExpression = cronExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public CreateRule withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalUnit")
    public IntervalUnitValuesEnum intervalUnit;
    public CreateRule withIntervalUnit(IntervalUnitValuesEnum intervalUnit) {
        this.intervalUnit = intervalUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public LocationValuesEnum location;
    public CreateRule withLocation(LocationValuesEnum location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Times")
    public String[] times;
    public CreateRule withTimes(String[] times) {
        this.times = times;
        return this;
    }
}