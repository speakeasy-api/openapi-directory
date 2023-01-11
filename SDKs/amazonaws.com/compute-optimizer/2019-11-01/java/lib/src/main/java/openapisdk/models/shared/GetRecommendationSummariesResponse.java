package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecommendationSummariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetRecommendationSummariesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationSummaries")
    public RecommendationSummary[] recommendationSummaries;
    public GetRecommendationSummariesResponse withRecommendationSummaries(RecommendationSummary[] recommendationSummaries) {
        this.recommendationSummaries = recommendationSummaries;
        return this;
    }
}