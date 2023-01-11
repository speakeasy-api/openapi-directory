package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchProductsAsAdminRequest {
    public SearchProductsAsAdminQueryParams queryParams;
    public SearchProductsAsAdminRequest withQueryParams(SearchProductsAsAdminQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchProductsAsAdminHeaders headers;
    public SearchProductsAsAdminRequest withHeaders(SearchProductsAsAdminHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchProductsAsAdminInput request;
    public SearchProductsAsAdminRequest withRequest(openapisdk.models.shared.SearchProductsAsAdminInput request) {
        this.request = request;
        return this;
    }
}