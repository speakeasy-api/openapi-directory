package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutoScalingGroupRecommendationsRequest {
    public GetAutoScalingGroupRecommendationsHeaders headers;
    public GetAutoScalingGroupRecommendationsRequest withHeaders(GetAutoScalingGroupRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAutoScalingGroupRecommendationsRequest request;
    public GetAutoScalingGroupRecommendationsRequest withRequest(openapisdk.models.shared.GetAutoScalingGroupRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}