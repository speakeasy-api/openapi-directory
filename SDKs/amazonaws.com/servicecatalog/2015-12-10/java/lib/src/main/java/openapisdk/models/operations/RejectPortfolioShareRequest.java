package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectPortfolioShareRequest {
    public RejectPortfolioShareHeaders headers;
    public RejectPortfolioShareRequest withHeaders(RejectPortfolioShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectPortfolioShareInput request;
    public RejectPortfolioShareRequest withRequest(openapisdk.models.shared.RejectPortfolioShareInput request) {
        this.request = request;
        return this;
    }
}