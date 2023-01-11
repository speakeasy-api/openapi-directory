package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupEventsResponse
 * Contains a response to a LookupEvents action.
**/
public class LookupEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public Event[] events;
    public LookupEventsResponse withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public LookupEventsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}