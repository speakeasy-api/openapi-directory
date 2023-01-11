package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateTimelineEventRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateTimelineEventRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventData")
    public String eventData;
    public UpdateTimelineEventRequestBody withEventData(String eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonProperty("eventId")
    public String eventId;
    public UpdateTimelineEventRequestBody withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public UpdateTimelineEventRequestBody withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public UpdateTimelineEventRequestBody withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public UpdateTimelineEventRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}