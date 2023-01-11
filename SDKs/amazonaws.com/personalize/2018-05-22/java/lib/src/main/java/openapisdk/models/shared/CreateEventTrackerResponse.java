package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEventTrackerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTrackerArn")
    public String eventTrackerArn;
    public CreateEventTrackerResponse withEventTrackerArn(String eventTrackerArn) {
        this.eventTrackerArn = eventTrackerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public CreateEventTrackerResponse withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}