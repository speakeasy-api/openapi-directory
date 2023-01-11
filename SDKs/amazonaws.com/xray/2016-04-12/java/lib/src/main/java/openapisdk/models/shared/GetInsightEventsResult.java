package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightEventsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightEvents")
    public InsightEvent[] insightEvents;
    public GetInsightEventsResult withInsightEvents(InsightEvent[] insightEvents) {
        this.insightEvents = insightEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightEventsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}