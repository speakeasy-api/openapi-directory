package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRecommenderConfigurationRequest {
    public CreateRecommenderConfigurationHeaders headers;
    public CreateRecommenderConfigurationRequest withHeaders(CreateRecommenderConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRecommenderConfigurationRequestBody request;
    public CreateRecommenderConfigurationRequest withRequest(CreateRecommenderConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}