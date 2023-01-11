package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetExecutionHistoryOutput {
    @JsonProperty("events")
    public HistoryEvent[] events;
    public GetExecutionHistoryOutput withEvents(HistoryEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetExecutionHistoryOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}