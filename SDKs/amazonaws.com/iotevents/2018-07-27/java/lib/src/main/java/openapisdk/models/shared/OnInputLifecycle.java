package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnInputLifecycle
 * Specifies the actions performed when the <code>condition</code> evaluates to TRUE.
**/
public class OnInputLifecycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Event[] events;
    public OnInputLifecycle withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitionEvents")
    public TransitionEvent[] transitionEvents;
    public OnInputLifecycle withTransitionEvents(TransitionEvent[] transitionEvents) {
        this.transitionEvents = transitionEvents;
        return this;
    }
}