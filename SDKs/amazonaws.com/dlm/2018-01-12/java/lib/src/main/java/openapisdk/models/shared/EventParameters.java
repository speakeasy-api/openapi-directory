package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EventParameters
 * Specifies an event that triggers an event-based policy.
**/
public class EventParameters {
    @JsonProperty("DescriptionRegex")
    public String descriptionRegex;
    public EventParameters withDescriptionRegex(String descriptionRegex) {
        this.descriptionRegex = descriptionRegex;
        return this;
    }
    @JsonProperty("EventType")
    public EventTypeValuesEnum eventType;
    public EventParameters withEventType(EventTypeValuesEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("SnapshotOwner")
    public String[] snapshotOwner;
    public EventParameters withSnapshotOwner(String[] snapshotOwner) {
        this.snapshotOwner = snapshotOwner;
        return this;
    }
}