package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEventTrackerRequest {
    @JsonProperty("eventTrackerArn")
    public String eventTrackerArn;
    public DeleteEventTrackerRequest withEventTrackerArn(String eventTrackerArn) {
        this.eventTrackerArn = eventTrackerArn;
        return this;
    }
}