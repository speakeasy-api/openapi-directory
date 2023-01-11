package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScheduleWorkPattern {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("even_weeks")
    public ScheduleWorkPatternEvenWeeks evenWeeks;
    public ScheduleWorkPattern withEvenWeeks(ScheduleWorkPatternEvenWeeks evenWeeks) {
        this.evenWeeks = evenWeeks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("odd_weeks")
    public ScheduleWorkPatternOddWeeks oddWeeks;
    public ScheduleWorkPattern withOddWeeks(ScheduleWorkPatternOddWeeks oddWeeks) {
        this.oddWeeks = oddWeeks;
        return this;
    }
}