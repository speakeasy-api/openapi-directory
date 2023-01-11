package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersForPortfolioRequest {
    public AddMembersForPortfolioPathParams pathParams;
    public AddMembersForPortfolioRequest withPathParams(AddMembersForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddMembersForPortfolioQueryParams queryParams;
    public AddMembersForPortfolioRequest withQueryParams(AddMembersForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddMembersForPortfolioRequestBody request;
    public AddMembersForPortfolioRequest withRequest(AddMembersForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}