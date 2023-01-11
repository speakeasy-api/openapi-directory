package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskTaskReminder
 * When the task is due
**/
public class TaskTaskReminder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public TaskTaskReminder withTime(String time) {
        this.time = time;
        return this;
    }
}