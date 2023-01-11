package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecommenderConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recommender-id")
    public String recommenderId;
    public UpdateRecommenderConfigurationPathParams withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
}