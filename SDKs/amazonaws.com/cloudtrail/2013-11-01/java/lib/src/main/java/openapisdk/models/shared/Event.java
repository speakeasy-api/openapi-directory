package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Event
 * Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKeyId")
    public String accessKeyId;
    public Event withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudTrailEvent")
    public String cloudTrailEvent;
    public Event withCloudTrailEvent(String cloudTrailEvent) {
        this.cloudTrailEvent = cloudTrailEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventId")
    public String eventId;
    public Event withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventName")
    public String eventName;
    public Event withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSource")
    public String eventSource;
    public Event withEventSource(String eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventTime")
    public OffsetDateTime eventTime;
    public Event withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReadOnly")
    public String readOnly;
    public Event withReadOnly(String readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Resources")
    public Resource[] resources;
    public Event withResources(Resource[] resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;
    public Event withUsername(String username) {
        this.username = username;
        return this;
    }
}