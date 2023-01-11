package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchInsightsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public SearchInsightsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProactiveInsights")
    public ProactiveInsightSummary[] proactiveInsights;
    public SearchInsightsResponse withProactiveInsights(ProactiveInsightSummary[] proactiveInsights) {
        this.proactiveInsights = proactiveInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReactiveInsights")
    public ReactiveInsightSummary[] reactiveInsights;
    public SearchInsightsResponse withReactiveInsights(ReactiveInsightSummary[] reactiveInsights) {
        this.reactiveInsights = reactiveInsights;
        return this;
    }
}