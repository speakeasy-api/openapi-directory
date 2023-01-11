package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEventsRequestBody {
    @JsonProperty("eventList")
    public openapisdk.models.shared.Event[] eventList;
    public PutEventsRequestBody withEventList(openapisdk.models.shared.Event[] eventList) {
        this.eventList = eventList;
        return this;
    }
    @JsonProperty("sessionId")
    public String sessionId;
    public PutEventsRequestBody withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonProperty("trackingId")
    public String trackingId;
    public PutEventsRequestBody withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public PutEventsRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}