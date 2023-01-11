package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateTimelineEventRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateTimelineEventRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("eventData")
    public String eventData;
    public CreateTimelineEventRequestBody withEventData(String eventData) {
        this.eventData = eventData;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("eventTime")
    public OffsetDateTime eventTime;
    public CreateTimelineEventRequestBody withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonProperty("eventType")
    public String eventType;
    public CreateTimelineEventRequestBody withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("incidentRecordArn")
    public String incidentRecordArn;
    public CreateTimelineEventRequestBody withIncidentRecordArn(String incidentRecordArn) {
        this.incidentRecordArn = incidentRecordArn;
        return this;
    }
}