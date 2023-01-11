package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePortfolioShareRequest {
    public CreatePortfolioShareHeaders headers;
    public CreatePortfolioShareRequest withHeaders(CreatePortfolioShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePortfolioShareInput request;
    public CreatePortfolioShareRequest withRequest(openapisdk.models.shared.CreatePortfolioShareInput request) {
        this.request = request;
        return this;
    }
}