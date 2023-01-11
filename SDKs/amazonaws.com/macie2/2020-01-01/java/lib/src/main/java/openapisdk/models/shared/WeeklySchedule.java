package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WeeklySchedule
 * Specifies a weekly recurrence pattern for running a classification job.
**/
public class WeeklySchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public DayOfWeekEnum dayOfWeek;
    public WeeklySchedule withDayOfWeek(DayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
}