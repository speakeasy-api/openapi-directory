package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimerStartedEventAttributes
 * Provides the details of the <code>TimerStarted</code> event.
**/
public class TimerStartedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public TimerStartedEventAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonProperty("decisionTaskCompletedEventId")
    public Long decisionTaskCompletedEventId;
    public TimerStartedEventAttributes withDecisionTaskCompletedEventId(Long decisionTaskCompletedEventId) {
        this.decisionTaskCompletedEventId = decisionTaskCompletedEventId;
        return this;
    }
    @JsonProperty("startToFireTimeout")
    public String startToFireTimeout;
    public TimerStartedEventAttributes withStartToFireTimeout(String startToFireTimeout) {
        this.startToFireTimeout = startToFireTimeout;
        return this;
    }
    @JsonProperty("timerId")
    public String timerId;
    public TimerStartedEventAttributes withTimerId(String timerId) {
        this.timerId = timerId;
        return this;
    }
}