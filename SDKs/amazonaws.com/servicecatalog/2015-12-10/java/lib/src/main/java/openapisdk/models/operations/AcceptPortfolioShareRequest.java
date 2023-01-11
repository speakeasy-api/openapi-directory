package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptPortfolioShareRequest {
    public AcceptPortfolioShareHeaders headers;
    public AcceptPortfolioShareRequest withHeaders(AcceptPortfolioShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptPortfolioShareInput request;
    public AcceptPortfolioShareRequest withRequest(openapisdk.models.shared.AcceptPortfolioShareInput request) {
        this.request = request;
        return this;
    }
}