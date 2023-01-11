package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateKeyRequest {
    public CreateKeyHeaders headers;
    public CreateKeyRequest withHeaders(CreateKeyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateKeyRequest request;
    public CreateKeyRequest withRequest(openapisdk.models.shared.CreateKeyRequest request) {
        this.request = request;
        return this;
    }
}