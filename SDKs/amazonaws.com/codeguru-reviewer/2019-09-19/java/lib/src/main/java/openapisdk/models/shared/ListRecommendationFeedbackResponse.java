package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRecommendationFeedbackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRecommendationFeedbackResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationFeedbackSummaries")
    public RecommendationFeedbackSummary[] recommendationFeedbackSummaries;
    public ListRecommendationFeedbackResponse withRecommendationFeedbackSummaries(RecommendationFeedbackSummary[] recommendationFeedbackSummaries) {
        this.recommendationFeedbackSummaries = recommendationFeedbackSummaries;
        return this;
    }
}