package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTimelineEventOutput {
    @JsonProperty("event")
    public TimelineEvent event;
    public GetTimelineEventOutput withEvent(TimelineEvent event) {
        this.event = event;
        return this;
    }
}