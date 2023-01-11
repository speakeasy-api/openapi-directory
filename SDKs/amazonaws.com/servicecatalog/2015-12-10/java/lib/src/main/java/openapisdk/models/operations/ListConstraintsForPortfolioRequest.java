package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConstraintsForPortfolioRequest {
    public ListConstraintsForPortfolioQueryParams queryParams;
    public ListConstraintsForPortfolioRequest withQueryParams(ListConstraintsForPortfolioQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConstraintsForPortfolioHeaders headers;
    public ListConstraintsForPortfolioRequest withHeaders(ListConstraintsForPortfolioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListConstraintsForPortfolioInput request;
    public ListConstraintsForPortfolioRequest withRequest(openapisdk.models.shared.ListConstraintsForPortfolioInput request) {
        this.request = request;
        return this;
    }
}