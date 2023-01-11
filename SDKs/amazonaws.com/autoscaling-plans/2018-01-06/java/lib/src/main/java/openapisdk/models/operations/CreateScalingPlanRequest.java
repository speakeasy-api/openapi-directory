package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScalingPlanRequest {
    public CreateScalingPlanHeaders headers;
    public CreateScalingPlanRequest withHeaders(CreateScalingPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateScalingPlanRequest request;
    public CreateScalingPlanRequest withRequest(openapisdk.models.shared.CreateScalingPlanRequest request) {
        this.request = request;
        return this;
    }
}