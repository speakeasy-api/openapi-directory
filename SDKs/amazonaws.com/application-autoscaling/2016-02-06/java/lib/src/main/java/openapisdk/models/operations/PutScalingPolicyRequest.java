package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScalingPolicyRequest {
    public PutScalingPolicyHeaders headers;
    public PutScalingPolicyRequest withHeaders(PutScalingPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutScalingPolicyRequest request;
    public PutScalingPolicyRequest withRequest(openapisdk.models.shared.PutScalingPolicyRequest request) {
        this.request = request;
        return this;
    }
}