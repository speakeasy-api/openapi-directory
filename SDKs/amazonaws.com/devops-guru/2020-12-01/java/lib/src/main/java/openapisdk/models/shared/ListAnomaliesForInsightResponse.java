package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAnomaliesForInsightResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnomaliesForInsightResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProactiveAnomalies")
    public ProactiveAnomalySummary[] proactiveAnomalies;
    public ListAnomaliesForInsightResponse withProactiveAnomalies(ProactiveAnomalySummary[] proactiveAnomalies) {
        this.proactiveAnomalies = proactiveAnomalies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReactiveAnomalies")
    public ReactiveAnomalySummary[] reactiveAnomalies;
    public ListAnomaliesForInsightResponse withReactiveAnomalies(ReactiveAnomalySummary[] reactiveAnomalies) {
        this.reactiveAnomalies = reactiveAnomalies;
        return this;
    }
}