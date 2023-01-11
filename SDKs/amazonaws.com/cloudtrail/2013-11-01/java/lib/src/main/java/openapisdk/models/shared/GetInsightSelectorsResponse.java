package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInsightSelectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightSelectors")
    public InsightSelector[] insightSelectors;
    public GetInsightSelectorsResponse withInsightSelectors(InsightSelector[] insightSelectors) {
        this.insightSelectors = insightSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailARN")
    public String trailARN;
    public GetInsightSelectorsResponse withTrailArn(String trailARN) {
        this.trailARN = trailARN;
        return this;
    }
}