package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePortfolioRequest {
    public DeletePortfolioHeaders headers;
    public DeletePortfolioRequest withHeaders(DeletePortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePortfolioInput request;
    public DeletePortfolioRequest withRequest(openapisdk.models.shared.DeletePortfolioInput request) {
        this.request = request;
        return this;
    }
}