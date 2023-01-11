package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveItemForPortfolioRequest {
    public RemoveItemForPortfolioPathParams pathParams;
    public RemoveItemForPortfolioRequest withPathParams(RemoveItemForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveItemForPortfolioQueryParams queryParams;
    public RemoveItemForPortfolioRequest withQueryParams(RemoveItemForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveItemForPortfolioRequestBody request;
    public RemoveItemForPortfolioRequest withRequest(RemoveItemForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}