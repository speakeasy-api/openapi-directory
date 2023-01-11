package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequest {
    public CreateProductHeaders headers;
    public CreateProductRequest withHeaders(CreateProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProductInput request;
    public CreateProductRequest withRequest(openapisdk.models.shared.CreateProductInput request) {
        this.request = request;
        return this;
    }
}