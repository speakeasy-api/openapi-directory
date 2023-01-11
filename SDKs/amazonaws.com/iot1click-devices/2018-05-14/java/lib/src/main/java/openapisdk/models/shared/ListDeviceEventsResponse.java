package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeviceEventsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Events")
    public java.util.Map<String, Object> events;
    public ListDeviceEventsResponse withEvents(java.util.Map<String, Object> events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public java.util.Map<String, Object> nextToken;
    public ListDeviceEventsResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}