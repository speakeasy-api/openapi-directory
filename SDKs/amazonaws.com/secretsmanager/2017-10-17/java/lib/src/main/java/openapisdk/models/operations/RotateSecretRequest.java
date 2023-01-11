package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RotateSecretRequest {
    public RotateSecretHeaders headers;
    public RotateSecretRequest withHeaders(RotateSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RotateSecretRequest request;
    public RotateSecretRequest withRequest(openapisdk.models.shared.RotateSecretRequest request) {
        this.request = request;
        return this;
    }
}