package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableKeyRotationRequest {
    public DisableKeyRotationHeaders headers;
    public DisableKeyRotationRequest withHeaders(DisableKeyRotationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableKeyRotationRequest request;
    public DisableKeyRotationRequest withRequest(openapisdk.models.shared.DisableKeyRotationRequest request) {
        this.request = request;
        return this;
    }
}