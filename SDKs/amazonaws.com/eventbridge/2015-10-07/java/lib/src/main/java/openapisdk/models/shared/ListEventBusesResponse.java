package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventBusesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBuses")
    public EventBus[] eventBuses;
    public ListEventBusesResponse withEventBuses(EventBus[] eventBuses) {
        this.eventBuses = eventBuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEventBusesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}