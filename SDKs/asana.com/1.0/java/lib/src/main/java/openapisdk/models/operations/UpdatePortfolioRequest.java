package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioRequest {
    public UpdatePortfolioPathParams pathParams;
    public UpdatePortfolioRequest withPathParams(UpdatePortfolioPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePortfolioQueryParams queryParams;
    public UpdatePortfolioRequest withQueryParams(UpdatePortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePortfolioRequestBodyInput request;
    public UpdatePortfolioRequest withRequest(UpdatePortfolioRequestBodyInput request) {
        this.request = request;
        return this;
    }
}