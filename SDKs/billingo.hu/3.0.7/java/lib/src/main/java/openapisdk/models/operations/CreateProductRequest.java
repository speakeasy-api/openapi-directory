package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductInput request;
    public CreateProductRequest withRequest(openapisdk.models.shared.ProductInput request) {
        this.request = request;
        return this;
    }
}