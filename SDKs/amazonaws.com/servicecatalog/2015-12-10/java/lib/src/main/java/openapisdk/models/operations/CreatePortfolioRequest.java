package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePortfolioRequest {
    public CreatePortfolioHeaders headers;
    public CreatePortfolioRequest withHeaders(CreatePortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePortfolioInput request;
    public CreatePortfolioRequest withRequest(openapisdk.models.shared.CreatePortfolioInput request) {
        this.request = request;
        return this;
    }
}