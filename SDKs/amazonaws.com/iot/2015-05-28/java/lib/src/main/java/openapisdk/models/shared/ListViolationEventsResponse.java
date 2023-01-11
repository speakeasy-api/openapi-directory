package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListViolationEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListViolationEventsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEvents")
    public ViolationEvent[] violationEvents;
    public ListViolationEventsResponse withViolationEvents(ViolationEvent[] violationEvents) {
        this.violationEvents = violationEvents;
        return this;
    }
}