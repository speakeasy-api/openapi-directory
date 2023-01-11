package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductRequest {
    public DeleteProductHeaders headers;
    public DeleteProductRequest withHeaders(DeleteProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteProductInput request;
    public DeleteProductRequest withRequest(openapisdk.models.shared.DeleteProductInput request) {
        this.request = request;
        return this;
    }
}