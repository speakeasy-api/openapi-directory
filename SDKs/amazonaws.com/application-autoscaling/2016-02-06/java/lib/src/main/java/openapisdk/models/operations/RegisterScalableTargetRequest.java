package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterScalableTargetRequest {
    public RegisterScalableTargetHeaders headers;
    public RegisterScalableTargetRequest withHeaders(RegisterScalableTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterScalableTargetRequest request;
    public RegisterScalableTargetRequest withRequest(openapisdk.models.shared.RegisterScalableTargetRequest request) {
        this.request = request;
        return this;
    }
}