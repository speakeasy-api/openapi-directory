package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEventTrackerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTracker")
    public EventTracker eventTracker;
    public DescribeEventTrackerResponse withEventTracker(EventTracker eventTracker) {
        this.eventTracker = eventTracker;
        return this;
    }
}