package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAutoScalingGroupRecommendationsRequest {
    public ExportAutoScalingGroupRecommendationsHeaders headers;
    public ExportAutoScalingGroupRecommendationsRequest withHeaders(ExportAutoScalingGroupRecommendationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportAutoScalingGroupRecommendationsRequest request;
    public ExportAutoScalingGroupRecommendationsRequest withRequest(openapisdk.models.shared.ExportAutoScalingGroupRecommendationsRequest request) {
        this.request = request;
        return this;
    }
}