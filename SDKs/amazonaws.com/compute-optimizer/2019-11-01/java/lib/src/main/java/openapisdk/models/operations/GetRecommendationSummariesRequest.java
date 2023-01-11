package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecommendationSummariesRequest {
    public GetRecommendationSummariesHeaders headers;
    public GetRecommendationSummariesRequest withHeaders(GetRecommendationSummariesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRecommendationSummariesRequest request;
    public GetRecommendationSummariesRequest withRequest(openapisdk.models.shared.GetRecommendationSummariesRequest request) {
        this.request = request;
        return this;
    }
}