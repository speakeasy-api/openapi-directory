package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductRequest {
    public UpdateProductHeaders headers;
    public UpdateProductRequest withHeaders(UpdateProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProductInput request;
    public UpdateProductRequest withRequest(openapisdk.models.shared.UpdateProductInput request) {
        this.request = request;
        return this;
    }
}