package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ActionHistory
 *  The historical records for a budget action. 
**/
public class ActionHistory {
    @JsonProperty("ActionHistoryDetails")
    public ActionHistoryDetails actionHistoryDetails;
    public ActionHistory withActionHistoryDetails(ActionHistoryDetails actionHistoryDetails) {
        this.actionHistoryDetails = actionHistoryDetails;
        return this;
    }
    @JsonProperty("EventType")
    public EventTypeEnum eventType;
    public ActionHistory withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("Status")
    public ActionStatusEnum status;
    public ActionHistory withStatus(ActionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public ActionHistory withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}