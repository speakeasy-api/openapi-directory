package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecommendationsRequest {
    public GetRecommendationsHeaders headers;
    public GetRecommendationsRequest withHeaders(GetRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetRecommendationsRequestBody request;
    public GetRecommendationsRequest withRequest(GetRecommendationsRequestBody request) {
        this.request = request;
        return this;
    }
}