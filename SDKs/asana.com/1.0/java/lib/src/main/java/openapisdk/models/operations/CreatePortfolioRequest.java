package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePortfolioRequest {
    public CreatePortfolioQueryParams queryParams;
    public CreatePortfolioRequest withQueryParams(CreatePortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePortfolioRequestBodyInput request;
    public CreatePortfolioRequest withRequest(CreatePortfolioRequestBodyInput request) {
        this.request = request;
        return this;
    }
}