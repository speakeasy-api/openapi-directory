package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogGetProductsRequest {
    public CatalogGetProductsPathParams pathParams;
    public CatalogGetProductsRequest withPathParams(CatalogGetProductsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProductsRequest request;
    public CatalogGetProductsRequest withRequest(openapisdk.models.shared.GetProductsRequest request) {
        this.request = request;
        return this;
    }
}