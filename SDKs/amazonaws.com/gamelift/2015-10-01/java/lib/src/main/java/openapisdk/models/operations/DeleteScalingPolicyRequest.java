package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScalingPolicyRequest {
    public DeleteScalingPolicyHeaders headers;
    public DeleteScalingPolicyRequest withHeaders(DeleteScalingPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteScalingPolicyInput request;
    public DeleteScalingPolicyRequest withRequest(openapisdk.models.shared.DeleteScalingPolicyInput request) {
        this.request = request;
        return this;
    }
}