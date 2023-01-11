package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePortfolioRequest {
    public UpdatePortfolioHeaders headers;
    public UpdatePortfolioRequest withHeaders(UpdatePortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePortfolioInput request;
    public UpdatePortfolioRequest withRequest(openapisdk.models.shared.UpdatePortfolioInput request) {
        this.request = request;
        return this;
    }
}