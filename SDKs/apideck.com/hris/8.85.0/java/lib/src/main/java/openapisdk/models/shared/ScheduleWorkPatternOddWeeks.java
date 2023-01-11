package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleWorkPatternOddWeeks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_friday")
    public Double hoursFriday;
    public ScheduleWorkPatternOddWeeks withHoursFriday(Double hoursFriday) {
        this.hoursFriday = hoursFriday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_monday")
    public Double hoursMonday;
    public ScheduleWorkPatternOddWeeks withHoursMonday(Double hoursMonday) {
        this.hoursMonday = hoursMonday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_saturday")
    public Double hoursSaturday;
    public ScheduleWorkPatternOddWeeks withHoursSaturday(Double hoursSaturday) {
        this.hoursSaturday = hoursSaturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_sunday")
    public Double hoursSunday;
    public ScheduleWorkPatternOddWeeks withHoursSunday(Double hoursSunday) {
        this.hoursSunday = hoursSunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_thursday")
    public Double hoursThursday;
    public ScheduleWorkPatternOddWeeks withHoursThursday(Double hoursThursday) {
        this.hoursThursday = hoursThursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_tuesday")
    public Double hoursTuesday;
    public ScheduleWorkPatternOddWeeks withHoursTuesday(Double hoursTuesday) {
        this.hoursTuesday = hoursTuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hours_wednesday")
    public Double hoursWednesday;
    public ScheduleWorkPatternOddWeeks withHoursWednesday(Double hoursWednesday) {
        this.hoursWednesday = hoursWednesday;
        return this;
    }
}