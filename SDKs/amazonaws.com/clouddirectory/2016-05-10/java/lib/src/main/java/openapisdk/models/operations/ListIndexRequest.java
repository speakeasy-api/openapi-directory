package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIndexRequest {
    public ListIndexQueryParams queryParams;
    public ListIndexRequest withQueryParams(ListIndexQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListIndexHeaders headers;
    public ListIndexRequest withHeaders(ListIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListIndexRequestBody request;
    public ListIndexRequest withRequest(ListIndexRequestBody request) {
        this.request = request;
        return this;
    }
}