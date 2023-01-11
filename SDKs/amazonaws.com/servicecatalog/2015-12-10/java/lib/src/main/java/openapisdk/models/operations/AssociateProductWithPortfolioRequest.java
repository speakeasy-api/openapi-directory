package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateProductWithPortfolioRequest {
    public AssociateProductWithPortfolioHeaders headers;
    public AssociateProductWithPortfolioRequest withHeaders(AssociateProductWithPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateProductWithPortfolioInput request;
    public AssociateProductWithPortfolioRequest withRequest(openapisdk.models.shared.AssociateProductWithPortfolioInput request) {
        this.request = request;
        return this;
    }
}