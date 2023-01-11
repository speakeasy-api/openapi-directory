package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioShareRequest {
    public UpdatePortfolioShareHeaders headers;
    public UpdatePortfolioShareRequest withHeaders(UpdatePortfolioShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePortfolioShareInput request;
    public UpdatePortfolioShareRequest withRequest(openapisdk.models.shared.UpdatePortfolioShareInput request) {
        this.request = request;
        return this;
    }
}