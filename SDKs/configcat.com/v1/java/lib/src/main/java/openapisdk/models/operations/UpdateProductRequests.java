package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdateProductRequest updateProductRequest;
    public UpdateProductRequests withUpdateProductRequest(openapisdk.models.shared.UpdateProductRequest updateProductRequest) {
        this.updateProductRequest = updateProductRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateProductRequest updateProductRequest1;
    public UpdateProductRequests withUpdateProductRequest1(openapisdk.models.shared.UpdateProductRequest updateProductRequest1) {
        this.updateProductRequest1 = updateProductRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdateProductRequest updateProductRequest2;
    public UpdateProductRequests withUpdateProductRequest2(openapisdk.models.shared.UpdateProductRequest updateProductRequest2) {
        this.updateProductRequest2 = updateProductRequest2;
        return this;
    }
}