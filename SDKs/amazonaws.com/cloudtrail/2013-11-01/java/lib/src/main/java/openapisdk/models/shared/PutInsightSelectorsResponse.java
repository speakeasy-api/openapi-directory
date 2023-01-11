package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutInsightSelectorsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InsightSelectors")
    public InsightSelector[] insightSelectors;
    public PutInsightSelectorsResponse withInsightSelectors(InsightSelector[] insightSelectors) {
        this.insightSelectors = insightSelectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailARN")
    public String trailARN;
    public PutInsightSelectorsResponse withTrailArn(String trailARN) {
        this.trailARN = trailARN;
        return this;
    }
}