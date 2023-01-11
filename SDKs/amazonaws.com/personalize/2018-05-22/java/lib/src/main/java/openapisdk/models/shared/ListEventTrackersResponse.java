package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventTrackersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTrackers")
    public EventTrackerSummary[] eventTrackers;
    public ListEventTrackersResponse withEventTrackers(EventTrackerSummary[] eventTrackers) {
        this.eventTrackers = eventTrackers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListEventTrackersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}