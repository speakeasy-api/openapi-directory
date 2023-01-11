package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TimelineEvent
 * A significant event that happened during the incident. 
**/
public class TimelineEvent {
    @JsonProperty("eventData")
    public String eventData;
    public TimelineEvent withEventData(String eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public TimelineEvent withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public TimelineEvent withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonProperty("eventType")
    public String eventType;
    public TimelineEvent withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventUpdatedTime")
    public OffsetDateTime eventUpdatedTime;
    public TimelineEvent withEventUpdatedTime(OffsetDateTime eventUpdatedTime) {
        this.eventUpdatedTime = eventUpdatedTime;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public TimelineEvent withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}