package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CancelTimerFailedEventAttributes
 * Provides the details of the <code>CancelTimerFailed</code> event.
**/
public class CancelTimerFailedEventAttributes {
    @JsonProperty("cause")
    public CancelTimerFailedCauseEnum cause;
    public CancelTimerFailedEventAttributes withCause(CancelTimerFailedCauseEnum cause) {
        this.cause = cause;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public CancelTimerFailedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("timerId")
    public String timerId;
    public CancelTimerFailedEventAttributes withTimerId(String timerId) {
        this.timerId = timerId;
        return this;
    }
}