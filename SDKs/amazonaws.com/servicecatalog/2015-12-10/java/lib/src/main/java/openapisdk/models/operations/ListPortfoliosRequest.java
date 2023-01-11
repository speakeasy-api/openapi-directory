package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPortfoliosRequest {
    public ListPortfoliosQueryParams queryParams;
    public ListPortfoliosRequest withQueryParams(ListPortfoliosQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPortfoliosHeaders headers;
    public ListPortfoliosRequest withHeaders(ListPortfoliosHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPortfoliosInput request;
    public ListPortfoliosRequest withRequest(openapisdk.models.shared.ListPortfoliosInput request) {
        this.request = request;
        return this;
    }
}