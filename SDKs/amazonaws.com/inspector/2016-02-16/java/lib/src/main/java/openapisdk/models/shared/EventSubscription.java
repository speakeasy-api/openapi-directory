package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EventSubscription
 * This data type is used in the <a>Subscription</a> data type.
**/
public class EventSubscription {
    @JsonProperty("event")
    public InspectorEventEnum event;
    public EventSubscription withEvent(InspectorEventEnum event) {
        this.event = event;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("subscribedAt")
    public OffsetDateTime subscribedAt;
    public EventSubscription withSubscribedAt(OffsetDateTime subscribedAt) {
        this.subscribedAt = subscribedAt;
        return this;
    }
}