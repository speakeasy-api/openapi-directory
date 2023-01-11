package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EventSummary
 * Details about a timeline event during an incident.
**/
public class EventSummary {
    @JsonProperty("eventId")
    public String eventId;
    public EventSummary withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public EventSummary withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonProperty("eventType")
    public String eventType;
    public EventSummary withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventUpdatedTime")
    public OffsetDateTime eventUpdatedTime;
    public EventSummary withEventUpdatedTime(OffsetDateTime eventUpdatedTime) {
        this.eventUpdatedTime = eventUpdatedTime;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public EventSummary withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}