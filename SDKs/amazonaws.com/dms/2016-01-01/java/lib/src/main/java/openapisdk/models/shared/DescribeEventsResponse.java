package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeEventsResponse
 * <p/>
**/
public class DescribeEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public Event[] events;
    public DescribeEventsResponse withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeEventsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}