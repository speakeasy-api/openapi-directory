package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogComputeExpressionRequest {
    public CatalogComputeExpressionPathParams pathParams;
    public CatalogComputeExpressionRequest withPathParams(CatalogComputeExpressionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ComputeExpressionRequest request;
    public CatalogComputeExpressionRequest withRequest(openapisdk.models.shared.ComputeExpressionRequest request) {
        this.request = request;
        return this;
    }
}