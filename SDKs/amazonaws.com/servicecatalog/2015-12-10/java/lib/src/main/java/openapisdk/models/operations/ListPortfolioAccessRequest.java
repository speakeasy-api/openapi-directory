package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPortfolioAccessRequest {
    public ListPortfolioAccessQueryParams queryParams;
    public ListPortfolioAccessRequest withQueryParams(ListPortfolioAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPortfolioAccessHeaders headers;
    public ListPortfolioAccessRequest withHeaders(ListPortfolioAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPortfolioAccessInput request;
    public ListPortfolioAccessRequest withRequest(openapisdk.models.shared.ListPortfolioAccessInput request) {
        this.request = request;
        return this;
    }
}