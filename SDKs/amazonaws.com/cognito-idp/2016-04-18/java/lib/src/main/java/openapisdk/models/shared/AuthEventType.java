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
 * AuthEventType
 * The authentication event type.
**/
public class AuthEventType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChallengeResponses")
    public ChallengeResponseType[] challengeResponses;
    public AuthEventType withChallengeResponses(ChallengeResponseType[] challengeResponses) {
        this.challengeResponses = challengeResponses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public AuthEventType withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventContextData")
    public EventContextDataType eventContextData;
    public AuthEventType withEventContextData(EventContextDataType eventContextData) {
        this.eventContextData = eventContextData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventFeedback")
    public EventFeedbackType eventFeedback;
    public AuthEventType withEventFeedback(EventFeedbackType eventFeedback) {
        this.eventFeedback = eventFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventId")
    public String eventId;
    public AuthEventType withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventResponse")
    public EventResponseTypeEnum eventResponse;
    public AuthEventType withEventResponse(EventResponseTypeEnum eventResponse) {
        this.eventResponse = eventResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventRisk")
    public EventRiskType eventRisk;
    public AuthEventType withEventRisk(EventRiskType eventRisk) {
        this.eventRisk = eventRisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventType")
    public EventTypeEnum eventType;
    public AuthEventType withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
}