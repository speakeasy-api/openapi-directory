package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSecretRequest {
    public DeleteSecretHeaders headers;
    public DeleteSecretRequest withHeaders(DeleteSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSecretRequest request;
    public DeleteSecretRequest withRequest(openapisdk.models.shared.DeleteSecretRequest request) {
        this.request = request;
        return this;
    }
}