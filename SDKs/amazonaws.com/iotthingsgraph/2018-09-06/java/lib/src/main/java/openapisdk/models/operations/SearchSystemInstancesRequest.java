package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchSystemInstancesRequest {
    public SearchSystemInstancesQueryParams queryParams;
    public SearchSystemInstancesRequest withQueryParams(SearchSystemInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchSystemInstancesHeaders headers;
    public SearchSystemInstancesRequest withHeaders(SearchSystemInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchSystemInstancesRequest request;
    public SearchSystemInstancesRequest withRequest(openapisdk.models.shared.SearchSystemInstancesRequest request) {
        this.request = request;
        return this;
    }
}