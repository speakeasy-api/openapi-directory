package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateClassificationJobRequestBodyScheduleFrequency
 * Specifies the recurrence pattern for running a classification job.
**/
public class CreateClassificationJobRequestBodyScheduleFrequency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailySchedule")
    public java.util.Map<String, Object> dailySchedule;
    public CreateClassificationJobRequestBodyScheduleFrequency withDailySchedule(java.util.Map<String, Object> dailySchedule) {
        this.dailySchedule = dailySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monthlySchedule")
    public openapisdk.models.shared.MonthlySchedule monthlySchedule;
    public CreateClassificationJobRequestBodyScheduleFrequency withMonthlySchedule(openapisdk.models.shared.MonthlySchedule monthlySchedule) {
        this.monthlySchedule = monthlySchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weeklySchedule")
    public openapisdk.models.shared.WeeklySchedule weeklySchedule;
    public CreateClassificationJobRequestBodyScheduleFrequency withWeeklySchedule(openapisdk.models.shared.WeeklySchedule weeklySchedule) {
        this.weeklySchedule = weeklySchedule;
        return this;
    }
}