package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeRecommendationFeedbackResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationFeedback")
    public RecommendationFeedback recommendationFeedback;
    public DescribeRecommendationFeedbackResponse withRecommendationFeedback(RecommendationFeedback recommendationFeedback) {
        this.recommendationFeedback = recommendationFeedback;
        return this;
    }
}