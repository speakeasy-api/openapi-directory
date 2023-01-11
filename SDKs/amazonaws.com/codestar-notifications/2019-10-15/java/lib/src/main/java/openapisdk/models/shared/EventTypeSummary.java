package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTypeSummary
 * Returns information about an event that has triggered a notification rule.
**/
public class EventTypeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTypeId")
    public String eventTypeId;
    public EventTypeSummary withEventTypeId(String eventTypeId) {
        this.eventTypeId = eventTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTypeName")
    public String eventTypeName;
    public EventTypeSummary withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public String resourceType;
    public EventTypeSummary withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public EventTypeSummary withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}