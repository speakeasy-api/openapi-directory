package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventTypesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventTypes")
    public EventTypeSummary[] eventTypes;
    public ListEventTypesResult withEventTypes(EventTypeSummary[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventTypesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}