package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CatalogChangeCustomColumnExpressionRequest {
    public CatalogChangeCustomColumnExpressionPathParams pathParams;
    public CatalogChangeCustomColumnExpressionRequest withPathParams(CatalogChangeCustomColumnExpressionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeCustomColumnExpressionRequest request;
    public CatalogChangeCustomColumnExpressionRequest withRequest(openapisdk.models.shared.ChangeCustomColumnExpressionRequest request) {
        this.request = request;
        return this;
    }
}