package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStreamsRequest {
    public ListStreamsQueryParams queryParams;
    public ListStreamsRequest withQueryParams(ListStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStreamsHeaders headers;
    public ListStreamsRequest withHeaders(ListStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListStreamsRequestBody request;
    public ListStreamsRequest withRequest(ListStreamsRequestBody request) {
        this.request = request;
        return this;
    }
}