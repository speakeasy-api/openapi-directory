package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RecommendationFeedback
 *  Information about the recommendation feedback. 
**/
public class RecommendationFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeReviewArn")
    public String codeReviewArn;
    public RecommendationFeedback withCodeReviewArn(String codeReviewArn) {
        this.codeReviewArn = codeReviewArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimeStamp")
    public OffsetDateTime createdTimeStamp;
    public RecommendationFeedback withCreatedTimeStamp(OffsetDateTime createdTimeStamp) {
        this.createdTimeStamp = createdTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimeStamp")
    public OffsetDateTime lastUpdatedTimeStamp;
    public RecommendationFeedback withLastUpdatedTimeStamp(OffsetDateTime lastUpdatedTimeStamp) {
        this.lastUpdatedTimeStamp = lastUpdatedTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Reactions")
    public ReactionEnum[] reactions;
    public RecommendationFeedback withReactions(ReactionEnum[] reactions) {
        this.reactions = reactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommendationId")
    public String recommendationId;
    public RecommendationFeedback withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserId")
    public String userId;
    public RecommendationFeedback withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}