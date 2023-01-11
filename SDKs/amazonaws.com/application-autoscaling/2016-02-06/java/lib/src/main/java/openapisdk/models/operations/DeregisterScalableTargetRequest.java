package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterScalableTargetRequest {
    public DeregisterScalableTargetHeaders headers;
    public DeregisterScalableTargetRequest withHeaders(DeregisterScalableTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterScalableTargetRequest request;
    public DeregisterScalableTargetRequest withRequest(openapisdk.models.shared.DeregisterScalableTargetRequest request) {
        this.request = request;
        return this;
    }
}