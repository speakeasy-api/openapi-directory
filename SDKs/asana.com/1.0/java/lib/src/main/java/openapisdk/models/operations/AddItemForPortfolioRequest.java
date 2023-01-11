package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemForPortfolioRequest {
    public AddItemForPortfolioPathParams pathParams;
    public AddItemForPortfolioRequest withPathParams(AddItemForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddItemForPortfolioQueryParams queryParams;
    public AddItemForPortfolioRequest withQueryParams(AddItemForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddItemForPortfolioRequestBody request;
    public AddItemForPortfolioRequest withRequest(AddItemForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}