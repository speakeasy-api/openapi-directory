package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimerCanceledEventAttributes
 *  Provides the details of the <code>TimerCanceled</code> event. 
**/
public class TimerCanceledEventAttributes {
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public TimerCanceledEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public TimerCanceledEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("timerId")
    public String timerId;
    public TimerCanceledEventAttributes withTimerId(String timerId) {
        this.timerId = timerId;
        return this;
    }
}