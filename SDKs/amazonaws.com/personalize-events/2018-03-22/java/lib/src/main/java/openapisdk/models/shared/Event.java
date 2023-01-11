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
 * Represents user interaction event information sent using the <code>PutEvents</code> API.
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public Event withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonProperty("eventType")
    public String eventType;
    public Event withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventValue")
    public Float eventValue;
    public Event withEventValue(Float eventValue) {
        this.eventValue = eventValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impression")
    public String[] impression;
    public Event withImpression(String[] impression) {
        this.impression = impression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public Event withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public Event withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationId")
    public String recommendationId;
    public Event withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("sentAt")
    public OffsetDateTime sentAt;
    public Event withSentAt(OffsetDateTime sentAt) {
        this.sentAt = sentAt;
        return this;
    }
}