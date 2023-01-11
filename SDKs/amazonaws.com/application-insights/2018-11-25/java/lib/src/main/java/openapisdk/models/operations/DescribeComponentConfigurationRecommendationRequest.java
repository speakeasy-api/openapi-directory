package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComponentConfigurationRecommendationRequest {
    public DescribeComponentConfigurationRecommendationHeaders headers;
    public DescribeComponentConfigurationRecommendationRequest withHeaders(DescribeComponentConfigurationRecommendationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeComponentConfigurationRecommendationRequest request;
    public DescribeComponentConfigurationRecommendationRequest withRequest(openapisdk.models.shared.DescribeComponentConfigurationRecommendationRequest request) {
        this.request = request;
        return this;
    }
}