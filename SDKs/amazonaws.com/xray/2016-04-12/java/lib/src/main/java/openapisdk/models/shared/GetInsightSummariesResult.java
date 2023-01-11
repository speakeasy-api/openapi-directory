package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightSummariesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightSummaries")
    public InsightSummary[] insightSummaries;
    public GetInsightSummariesResult withInsightSummaries(InsightSummary[] insightSummaries) {
        this.insightSummaries = insightSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightSummariesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}