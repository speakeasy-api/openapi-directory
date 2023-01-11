package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScalingPlanRequest {
    public UpdateScalingPlanHeaders headers;
    public UpdateScalingPlanRequest withHeaders(UpdateScalingPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateScalingPlanRequest request;
    public UpdateScalingPlanRequest withRequest(openapisdk.models.shared.UpdateScalingPlanRequest request) {
        this.request = request;
        return this;
    }
}