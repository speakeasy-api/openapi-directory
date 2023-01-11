package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTriggerDefinition
 * The container for the <a>EventTriggerDefinition$EventResourceARN</a>.
**/
public class EventTriggerDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventResourceARN")
    public String eventResourceARN;
    public EventTriggerDefinition withEventResourceArn(String eventResourceARN) {
        this.eventResourceARN = eventResourceARN;
        return this;
    }
}