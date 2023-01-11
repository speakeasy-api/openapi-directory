package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInsightResultsResponse {
    @JsonProperty("InsightResults")
    public InsightResults insightResults;
    public GetInsightResultsResponse withInsightResults(InsightResults insightResults) {
        this.insightResults = insightResults;
        return this;
    }
}