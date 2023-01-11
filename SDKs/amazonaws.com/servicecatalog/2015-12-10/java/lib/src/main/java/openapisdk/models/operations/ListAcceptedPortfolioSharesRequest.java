package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAcceptedPortfolioSharesRequest {
    public ListAcceptedPortfolioSharesQueryParams queryParams;
    public ListAcceptedPortfolioSharesRequest withQueryParams(ListAcceptedPortfolioSharesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAcceptedPortfolioSharesHeaders headers;
    public ListAcceptedPortfolioSharesRequest withHeaders(ListAcceptedPortfolioSharesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAcceptedPortfolioSharesInput request;
    public ListAcceptedPortfolioSharesRequest withRequest(openapisdk.models.shared.ListAcceptedPortfolioSharesInput request) {
        this.request = request;
        return this;
    }
}