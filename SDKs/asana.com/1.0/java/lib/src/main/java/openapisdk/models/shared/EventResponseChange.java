package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventResponseChange
 * Information about the type of change that has occurred. This field is only present when the value of the property `action`, describing the action taken on the **resource**, is `changed`.
**/
public class EventResponseChange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public EventResponseChange withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("added_value")
    public Object addedValue;
    public EventResponseChange withAddedValue(Object addedValue) {
        this.addedValue = addedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public EventResponseChange withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_value")
    public Object newValue;
    public EventResponseChange withNewValue(Object newValue) {
        this.newValue = newValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removed_value")
    public Object removedValue;
    public EventResponseChange withRemovedValue(Object removedValue) {
        this.removedValue = removedValue;
        return this;
    }
}