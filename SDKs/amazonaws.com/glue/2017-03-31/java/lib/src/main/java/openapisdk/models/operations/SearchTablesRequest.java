package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchTablesRequest {
    public SearchTablesQueryParams queryParams;
    public SearchTablesRequest withQueryParams(SearchTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchTablesHeaders headers;
    public SearchTablesRequest withHeaders(SearchTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchTablesRequest request;
    public SearchTablesRequest withRequest(openapisdk.models.shared.SearchTablesRequest request) {
        this.request = request;
        return this;
    }
}