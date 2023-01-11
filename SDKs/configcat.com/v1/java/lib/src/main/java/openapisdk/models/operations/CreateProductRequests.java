package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreateProductRequest createProductRequest;
    public CreateProductRequests withCreateProductRequest(openapisdk.models.shared.CreateProductRequest createProductRequest) {
        this.createProductRequest = createProductRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProductRequest createProductRequest1;
    public CreateProductRequests withCreateProductRequest1(openapisdk.models.shared.CreateProductRequest createProductRequest1) {
        this.createProductRequest1 = createProductRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateProductRequest createProductRequest2;
    public CreateProductRequests withCreateProductRequest2(openapisdk.models.shared.CreateProductRequest createProductRequest2) {
        this.createProductRequest2 = createProductRequest2;
        return this;
    }
}