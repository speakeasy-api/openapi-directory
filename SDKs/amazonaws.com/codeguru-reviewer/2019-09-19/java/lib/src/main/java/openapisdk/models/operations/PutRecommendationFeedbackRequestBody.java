package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRecommendationFeedbackRequestBody {
    @JsonProperty("CodeReviewArn")
    public String codeReviewArn;
    public PutRecommendationFeedbackRequestBody withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
    @JsonProperty("Reactions")
    public openapisdk.models.shared.ReactionEnum[] reactions;
    public PutRecommendationFeedbackRequestBody withReactions(openapisdk.models.shared.ReactionEnum[] reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonProperty("RecommendationId")
    public String recommendationId;
    public PutRecommendationFeedbackRequestBody withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
}