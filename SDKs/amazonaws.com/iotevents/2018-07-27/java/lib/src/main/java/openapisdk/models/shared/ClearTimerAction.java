package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ClearTimerAction
 * Information needed to clear the timer.
**/
public class ClearTimerAction {
    @JsonProperty("timerName")
    public String timerName;
    public ClearTimerAction withTimerName(String timerName) {
        this.timerName = timerName;
        return this;
    }
}