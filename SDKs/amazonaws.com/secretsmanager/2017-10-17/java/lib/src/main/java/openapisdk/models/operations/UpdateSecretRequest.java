package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSecretRequest {
    public UpdateSecretHeaders headers;
    public UpdateSecretRequest withHeaders(UpdateSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSecretRequest request;
    public UpdateSecretRequest withRequest(openapisdk.models.shared.UpdateSecretRequest request) {
        this.request = request;
        return this;
    }
}