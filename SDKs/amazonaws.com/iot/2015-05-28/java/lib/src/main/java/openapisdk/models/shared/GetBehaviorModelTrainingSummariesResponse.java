package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBehaviorModelTrainingSummariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetBehaviorModelTrainingSummariesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summaries")
    public BehaviorModelTrainingSummary[] summaries;
    public GetBehaviorModelTrainingSummariesResponse withSummaries(BehaviorModelTrainingSummary[] summaries) {
        this.summaries = summaries;
        return this;
    }
}