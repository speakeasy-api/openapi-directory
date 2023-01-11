package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecommenderConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=recommender-id")
    public String recommenderId;
    public DeleteRecommenderConfigurationPathParams withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
}