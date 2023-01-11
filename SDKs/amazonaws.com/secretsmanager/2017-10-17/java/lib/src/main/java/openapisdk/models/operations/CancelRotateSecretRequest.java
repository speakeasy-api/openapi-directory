package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelRotateSecretRequest {
    public CancelRotateSecretHeaders headers;
    public CancelRotateSecretRequest withHeaders(CancelRotateSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelRotateSecretRequest request;
    public CancelRotateSecretRequest withRequest(openapisdk.models.shared.CancelRotateSecretRequest request) {
        this.request = request;
        return this;
    }
}