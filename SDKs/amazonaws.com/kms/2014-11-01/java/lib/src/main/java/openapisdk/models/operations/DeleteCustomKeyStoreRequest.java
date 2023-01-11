package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomKeyStoreRequest {
    public DeleteCustomKeyStoreHeaders headers;
    public DeleteCustomKeyStoreRequest withHeaders(DeleteCustomKeyStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCustomKeyStoreRequest request;
    public DeleteCustomKeyStoreRequest withRequest(openapisdk.models.shared.DeleteCustomKeyStoreRequest request) {
        this.request = request;
        return this;
    }
}