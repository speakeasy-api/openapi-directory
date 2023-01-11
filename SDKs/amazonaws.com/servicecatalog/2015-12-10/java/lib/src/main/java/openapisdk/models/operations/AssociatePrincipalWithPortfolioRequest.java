package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociatePrincipalWithPortfolioRequest {
    public AssociatePrincipalWithPortfolioHeaders headers;
    public AssociatePrincipalWithPortfolioRequest withHeaders(AssociatePrincipalWithPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociatePrincipalWithPortfolioInput request;
    public AssociatePrincipalWithPortfolioRequest withRequest(openapisdk.models.shared.AssociatePrincipalWithPortfolioInput request) {
        this.request = request;
        return this;
    }
}