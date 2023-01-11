package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPersonalizedRankingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalizedRanking")
    public PredictedItem[] personalizedRanking;
    public GetPersonalizedRankingResponse withPersonalizedRanking(PredictedItem[] personalizedRanking) {
        this.personalizedRanking = personalizedRanking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationId")
    public String recommendationId;
    public GetPersonalizedRankingResponse withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
}