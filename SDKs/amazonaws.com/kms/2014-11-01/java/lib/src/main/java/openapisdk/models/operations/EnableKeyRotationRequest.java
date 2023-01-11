package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableKeyRotationRequest {
    public EnableKeyRotationHeaders headers;
    public EnableKeyRotationRequest withHeaders(EnableKeyRotationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableKeyRotationRequest request;
    public EnableKeyRotationRequest withRequest(openapisdk.models.shared.EnableKeyRotationRequest request) {
        this.request = request;
        return this;
    }
}