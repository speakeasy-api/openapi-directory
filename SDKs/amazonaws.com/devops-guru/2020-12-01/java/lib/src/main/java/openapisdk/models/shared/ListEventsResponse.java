package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventsResponse {
    @JsonProperty("Events")
    public Event[] events;
    public ListEventsResponse withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}