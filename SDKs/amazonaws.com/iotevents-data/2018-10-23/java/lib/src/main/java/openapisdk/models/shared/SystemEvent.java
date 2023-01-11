package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemEvent
 * Contains information about alarm state changes.
**/
public class SystemEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public EventTypeEnum eventType;
    public SystemEvent withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateChangeConfiguration")
    public StateChangeConfiguration stateChangeConfiguration;
    public SystemEvent withStateChangeConfiguration(StateChangeConfiguration stateChangeConfiguration) {
        this.stateChangeConfiguration = stateChangeConfiguration;
        return this;
    }
}