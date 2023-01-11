package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecommendationFeedbackSummary
 *  Information about recommendation feedback summaries. 
**/
public class RecommendationFeedbackSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reactions")
    public ReactionEnum[] reactions;
    public RecommendationFeedbackSummary withReactions(ReactionEnum[] reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationId")
    public String recommendationId;
    public RecommendationFeedbackSummary withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserId")
    public String userId;
    public RecommendationFeedbackSummary withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}