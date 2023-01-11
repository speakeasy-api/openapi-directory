package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScalingPlanRequest {
    public DeleteScalingPlanHeaders headers;
    public DeleteScalingPlanRequest withHeaders(DeleteScalingPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteScalingPlanRequest request;
    public DeleteScalingPlanRequest withRequest(openapisdk.models.shared.DeleteScalingPlanRequest request) {
        this.request = request;
        return this;
    }
}