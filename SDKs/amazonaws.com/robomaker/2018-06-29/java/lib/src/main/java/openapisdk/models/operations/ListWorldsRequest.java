package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorldsRequest {
    public ListWorldsQueryParams queryParams;
    public ListWorldsRequest withQueryParams(ListWorldsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorldsHeaders headers;
    public ListWorldsRequest withHeaders(ListWorldsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListWorldsRequestBody request;
    public ListWorldsRequest withRequest(ListWorldsRequestBody request) {
        this.request = request;
        return this;
    }
}