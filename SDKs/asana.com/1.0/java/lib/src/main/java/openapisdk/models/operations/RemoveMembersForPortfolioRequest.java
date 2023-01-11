package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveMembersForPortfolioRequest {
    public RemoveMembersForPortfolioPathParams pathParams;
    public RemoveMembersForPortfolioRequest withPathParams(RemoveMembersForPortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveMembersForPortfolioQueryParams queryParams;
    public RemoveMembersForPortfolioRequest withQueryParams(RemoveMembersForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveMembersForPortfolioRequestBody request;
    public RemoveMembersForPortfolioRequest withRequest(RemoveMembersForPortfolioRequestBody request) {
        this.request = request;
        return this;
    }
}