package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProductsRequest {
    public SearchProductsQueryParams queryParams;
    public SearchProductsRequest withQueryParams(SearchProductsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchProductsHeaders headers;
    public SearchProductsRequest withHeaders(SearchProductsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchProductsInput request;
    public SearchProductsRequest withRequest(openapisdk.models.shared.SearchProductsInput request) {
        this.request = request;
        return this;
    }
}