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
 * <p>Log entry describing an event that involves GameLift resources (such as a fleet). In addition to tracking activity, event codes and messages can provide additional information for troubleshooting and debugging problems.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetEvents</a> </p>
**/
public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventCode")
    public EventCodeEnum eventCode;
    public Event withEventCode(EventCodeEnum eventCode) {
        this.eventCode = eventCode;
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
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("EventTime")
    public OffsetDateTime eventTime;
    public Event withEventTime(OffsetDateTime eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public Event withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreSignedLogUrl")
    public String preSignedLogUrl;
    public Event withPreSignedLogUrl(String preSignedLogUrl) {
        this.preSignedLogUrl = preSignedLogUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public Event withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}