package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecommenderConfigurationRequest {
    public UpdateRecommenderConfigurationPathParams pathParams;
    public UpdateRecommenderConfigurationRequest withPathParams(UpdateRecommenderConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateRecommenderConfigurationHeaders headers;
    public UpdateRecommenderConfigurationRequest withHeaders(UpdateRecommenderConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRecommenderConfigurationRequestBody request;
    public UpdateRecommenderConfigurationRequest withRequest(UpdateRecommenderConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}