package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightsResponse {
    @JsonProperty("Insights")
    public Insight[] insights;
    public GetInsightsResponse withInsights(Insight[] insights) {
        this.insights = insights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetInsightsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}