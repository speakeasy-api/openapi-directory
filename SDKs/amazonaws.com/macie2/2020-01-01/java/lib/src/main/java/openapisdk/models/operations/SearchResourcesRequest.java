package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchResourcesRequest {
    public SearchResourcesQueryParams queryParams;
    public SearchResourcesRequest withQueryParams(SearchResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchResourcesHeaders headers;
    public SearchResourcesRequest withHeaders(SearchResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchResourcesRequestBody request;
    public SearchResourcesRequest withRequest(SearchResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}