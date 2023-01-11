package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociatePrincipalFromPortfolioRequest {
    public DisassociatePrincipalFromPortfolioHeaders headers;
    public DisassociatePrincipalFromPortfolioRequest withHeaders(DisassociatePrincipalFromPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociatePrincipalFromPortfolioInput request;
    public DisassociatePrincipalFromPortfolioRequest withRequest(openapisdk.models.shared.DisassociatePrincipalFromPortfolioInput request) {
        this.request = request;
        return this;
    }
}