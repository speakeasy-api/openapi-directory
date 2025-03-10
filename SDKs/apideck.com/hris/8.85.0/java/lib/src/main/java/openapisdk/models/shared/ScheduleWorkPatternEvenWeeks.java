package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleWorkPatternEvenWeeks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_friday")
    public Double hoursFriday;
    public ScheduleWorkPatternEvenWeeks withHoursFriday(Double hoursFriday) {
        this.hoursFriday = hoursFriday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_monday")
    public Double hoursMonday;
    public ScheduleWorkPatternEvenWeeks withHoursMonday(Double hoursMonday) {
        this.hoursMonday = hoursMonday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_saturday")
    public Double hoursSaturday;
    public ScheduleWorkPatternEvenWeeks withHoursSaturday(Double hoursSaturday) {
        this.hoursSaturday = hoursSaturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_sunday")
    public Double hoursSunday;
    public ScheduleWorkPatternEvenWeeks withHoursSunday(Double hoursSunday) {
        this.hoursSunday = hoursSunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_thursday")
    public Double hoursThursday;
    public ScheduleWorkPatternEvenWeeks withHoursThursday(Double hoursThursday) {
        this.hoursThursday = hoursThursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_tuesday")
    public Double hoursTuesday;
    public ScheduleWorkPatternEvenWeeks withHoursTuesday(Double hoursTuesday) {
        this.hoursTuesday = hoursTuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_wednesday")
    public Double hoursWednesday;
    public ScheduleWorkPatternEvenWeeks withHoursWednesday(Double hoursWednesday) {
        this.hoursWednesday = hoursWednesday;
        return this;
    }
}