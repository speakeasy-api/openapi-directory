package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductsRequest {
    public GetProductsQueryParams queryParams;
    public GetProductsRequest withQueryParams(GetProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProductsHeaders headers;
    public GetProductsRequest withHeaders(GetProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProductsRequest request;
    public GetProductsRequest withRequest(openapisdk.models.shared.GetProductsRequest request) {
        this.request = request;
        return this;
    }
}