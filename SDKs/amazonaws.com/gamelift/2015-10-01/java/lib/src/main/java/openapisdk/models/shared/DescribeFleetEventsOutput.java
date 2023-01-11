package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeFleetEventsOutput
 * Represents the returned data in response to a request operation.
**/
public class DescribeFleetEventsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public Event[] events;
    public DescribeFleetEventsOutput withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeFleetEventsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}