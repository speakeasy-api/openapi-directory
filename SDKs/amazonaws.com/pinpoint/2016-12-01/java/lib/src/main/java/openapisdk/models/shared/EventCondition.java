package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventCondition
 * Specifies the conditions to evaluate for an event that applies to an activity in a journey.
**/
public class EventCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public EventDimensions dimensions;
    public EventCondition withDimensions(EventDimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageActivity")
    public String messageActivity;
    public EventCondition withMessageActivity(String messageActivity) {
        this.messageActivity = messageActivity;
        return this;
    }
}