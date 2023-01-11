package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventsDetectionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventsDetectionJobPropertiesList")
    public EventsDetectionJobProperties[] eventsDetectionJobPropertiesList;
    public ListEventsDetectionJobsResponse withEventsDetectionJobPropertiesList(EventsDetectionJobProperties[] eventsDetectionJobPropertiesList) {
        this.eventsDetectionJobPropertiesList = eventsDetectionJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventsDetectionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}