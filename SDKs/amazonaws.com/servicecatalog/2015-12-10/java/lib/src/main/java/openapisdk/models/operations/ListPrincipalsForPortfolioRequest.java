package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPrincipalsForPortfolioRequest {
    public ListPrincipalsForPortfolioQueryParams queryParams;
    public ListPrincipalsForPortfolioRequest withQueryParams(ListPrincipalsForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPrincipalsForPortfolioHeaders headers;
    public ListPrincipalsForPortfolioRequest withHeaders(ListPrincipalsForPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPrincipalsForPortfolioInput request;
    public ListPrincipalsForPortfolioRequest withRequest(openapisdk.models.shared.ListPrincipalsForPortfolioInput request) {
        this.request = request;
        return this;
    }
}