package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGraphsRequest {
    public ListGraphsQueryParams queryParams;
    public ListGraphsRequest withQueryParams(ListGraphsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGraphsHeaders headers;
    public ListGraphsRequest withHeaders(ListGraphsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListGraphsRequestBody request;
    public ListGraphsRequest withRequest(ListGraphsRequestBody request) {
        this.request = request;
        return this;
    }
}