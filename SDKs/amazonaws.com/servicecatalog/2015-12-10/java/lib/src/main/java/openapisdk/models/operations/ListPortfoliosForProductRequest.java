package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPortfoliosForProductRequest {
    public ListPortfoliosForProductQueryParams queryParams;
    public ListPortfoliosForProductRequest withQueryParams(ListPortfoliosForProductQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPortfoliosForProductHeaders headers;
    public ListPortfoliosForProductRequest withHeaders(ListPortfoliosForProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPortfoliosForProductInput request;
    public ListPortfoliosForProductRequest withRequest(openapisdk.models.shared.ListPortfoliosForProductInput request) {
        this.request = request;
        return this;
    }
}