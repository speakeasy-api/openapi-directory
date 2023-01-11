package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCustomKeyStoreRequest {
    public UpdateCustomKeyStoreHeaders headers;
    public UpdateCustomKeyStoreRequest withHeaders(UpdateCustomKeyStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCustomKeyStoreRequest request;
    public UpdateCustomKeyStoreRequest withRequest(openapisdk.models.shared.UpdateCustomKeyStoreRequest request) {
        this.request = request;
        return this;
    }
}