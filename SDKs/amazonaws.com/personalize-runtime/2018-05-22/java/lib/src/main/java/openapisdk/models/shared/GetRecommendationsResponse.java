package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemList")
    public PredictedItem[] itemList;
    public GetRecommendationsResponse withItemList(PredictedItem[] itemList) {
        this.itemList = itemList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationId")
    public String recommendationId;
    public GetRecommendationsResponse withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
}