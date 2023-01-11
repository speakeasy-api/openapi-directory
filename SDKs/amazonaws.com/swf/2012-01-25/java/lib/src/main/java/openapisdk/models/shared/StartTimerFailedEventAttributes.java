package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StartTimerFailedEventAttributes
 * Provides the details of the <code>StartTimerFailed</code> event.
**/
public class StartTimerFailedEventAttributes {
    @JsonProperty("cause")
    public StartTimerFailedCauseEnum cause;
    public StartTimerFailedEventAttributes withCause(StartTimerFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public StartTimerFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("timerId")
    public String timerId;
    public StartTimerFailedEventAttributes withTimerId(String timerId) {
        this.timerId = timerId;
        return this;
    }
}