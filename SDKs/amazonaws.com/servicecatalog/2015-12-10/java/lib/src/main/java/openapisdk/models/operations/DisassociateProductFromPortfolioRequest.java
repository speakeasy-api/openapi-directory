package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateProductFromPortfolioRequest {
    public DisassociateProductFromPortfolioHeaders headers;
    public DisassociateProductFromPortfolioRequest withHeaders(DisassociateProductFromPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateProductFromPortfolioInput request;
    public DisassociateProductFromPortfolioRequest withRequest(openapisdk.models.shared.DisassociateProductFromPortfolioInput request) {
        this.request = request;
        return this;
    }
}