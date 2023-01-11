package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomKeyStoreRequest {
    public CreateCustomKeyStoreHeaders headers;
    public CreateCustomKeyStoreRequest withHeaders(CreateCustomKeyStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCustomKeyStoreRequest request;
    public CreateCustomKeyStoreRequest withRequest(openapisdk.models.shared.CreateCustomKeyStoreRequest request) {
        this.request = request;
        return this;
    }
}