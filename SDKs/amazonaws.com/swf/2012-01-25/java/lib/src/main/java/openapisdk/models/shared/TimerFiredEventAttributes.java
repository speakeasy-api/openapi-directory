package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TimerFiredEventAttributes
 * Provides the details of the <code>TimerFired</code> event.
**/
public class TimerFiredEventAttributes {
    @JsonProperty("startedEventId")
    public Long startedEventId;
    public TimerFiredEventAttributes withStartedEventId(Long startedEventId) {
        this.startedEventId = startedEventId;
        return this;
    }
    @JsonProperty("timerId")
    public String timerId;
    public TimerFiredEventAttributes withTimerId(String timerId) {
        this.timerId = timerId;
        return this;
    }
}