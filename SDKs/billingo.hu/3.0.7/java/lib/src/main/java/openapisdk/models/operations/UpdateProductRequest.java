package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductRequest {
    public UpdateProductPathParams pathParams;
    public UpdateProductRequest withPathParams(UpdateProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProductInput request;
    public UpdateProductRequest withRequest(openapisdk.models.shared.ProductInput request) {
        this.request = request;
        return this;
    }
}