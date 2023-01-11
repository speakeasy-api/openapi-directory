package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransitionEvent
 * Specifies the actions performed and the next state entered when a <code>condition</code> evaluates to TRUE.
**/
public class TransitionEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public TransitionEvent withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("condition")
    public String condition;
    public TransitionEvent withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public TransitionEvent withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("nextState")
    public String nextState;
    public TransitionEvent withNextState(String nextState) {
        this.nextState = nextState;
        return this;
    }
}