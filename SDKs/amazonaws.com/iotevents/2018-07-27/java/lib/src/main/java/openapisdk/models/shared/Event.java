package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Event
 * Specifies the <code>actions</code> to be performed when the <code>condition</code> evaluates to TRUE.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public Action[] actions;
    public Event withActions(Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public Event withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public Event withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
}