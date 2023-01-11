package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSecretRequest {
    public CreateSecretHeaders headers;
    public CreateSecretRequest withHeaders(CreateSecretHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSecretRequest request;
    public CreateSecretRequest withRequest(openapisdk.models.shared.CreateSecretRequest request) {
        this.request = request;
        return this;
    }
}