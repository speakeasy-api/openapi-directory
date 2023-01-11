package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutInsightSelectorsRequest {
    @JsonProperty("InsightSelectors")
    public InsightSelector[] insightSelectors;
    public PutInsightSelectorsRequest withInsightSelectors(InsightSelector[] insightSelectors) {
        this.insightSelectors = insightSelectors;
        return this;
    }
    @JsonProperty("TrailName")
    public String trailName;
    public PutInsightSelectorsRequest withTrailName(String trailName) {
        this.trailName = trailName;
        return this;
    }
}