package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePortfolioShareRequest {
    public DeletePortfolioShareHeaders headers;
    public DeletePortfolioShareRequest withHeaders(DeletePortfolioShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePortfolioShareInput request;
    public DeletePortfolioShareRequest withRequest(openapisdk.models.shared.DeletePortfolioShareInput request) {
        this.request = request;
        return this;
    }
}