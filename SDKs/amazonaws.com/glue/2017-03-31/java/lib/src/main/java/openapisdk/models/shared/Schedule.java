package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Schedule
 * A scheduling object using a <code>cron</code> statement to schedule an event.
**/
public class Schedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduleExpression")
    public String scheduleExpression;
    public Schedule withScheduleExpression(String scheduleExpression) {
        this.scheduleExpression = scheduleExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ScheduleStateEnum state;
    public Schedule withState(ScheduleStateEnum state) {
        this.state = state;
        return this;
    }
}