package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSources")
    public EventSource[] eventSources;
    public ListEventSourcesResponse withEventSources(EventSource[] eventSources) {
        this.eventSources = eventSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventSourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}