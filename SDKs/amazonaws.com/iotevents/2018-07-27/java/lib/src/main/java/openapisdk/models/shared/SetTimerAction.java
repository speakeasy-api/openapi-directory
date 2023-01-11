package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetTimerAction
 * Information needed to set the timer.
**/
public class SetTimerAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationExpression")
    public String durationExpression;
    public SetTimerAction withDurationExpression(String durationExpression) {
        this.durationExpression = durationExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seconds")
    public java.util.Map<String, Object> seconds;
    public SetTimerAction withSeconds(java.util.Map<String, Object> seconds) {
        this.seconds = seconds;
        return this;
    }
    @JsonProperty("timerName")
    public String timerName;
    public SetTimerAction withTimerName(String timerName) {
        this.timerName = timerName;
        return this;
    }
}