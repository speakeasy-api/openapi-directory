package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEventsDetectionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventsDetectionJobProperties")
    public EventsDetectionJobProperties eventsDetectionJobProperties;
    public DescribeEventsDetectionJobResponse withEventsDetectionJobProperties(EventsDetectionJobProperties eventsDetectionJobProperties) {
        this.eventsDetectionJobProperties = eventsDetectionJobProperties;
        return this;
    }
}