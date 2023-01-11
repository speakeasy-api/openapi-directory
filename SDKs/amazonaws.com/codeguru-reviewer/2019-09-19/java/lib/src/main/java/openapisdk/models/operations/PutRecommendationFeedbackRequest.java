package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecommendationFeedbackRequest {
    public PutRecommendationFeedbackHeaders headers;
    public PutRecommendationFeedbackRequest withHeaders(PutRecommendationFeedbackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutRecommendationFeedbackRequestBody request;
    public PutRecommendationFeedbackRequest withRequest(PutRecommendationFeedbackRequestBody request) {
        this.request = request;
        return this;
    }
}