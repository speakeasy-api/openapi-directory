package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public Event[] events;
    public DescribeEventsResponse withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeEventsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}