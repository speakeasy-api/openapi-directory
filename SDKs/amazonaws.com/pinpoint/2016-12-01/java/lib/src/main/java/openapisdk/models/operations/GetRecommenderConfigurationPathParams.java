package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecommenderConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recommender-id")
    public String recommenderId;
    public GetRecommenderConfigurationPathParams withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
}