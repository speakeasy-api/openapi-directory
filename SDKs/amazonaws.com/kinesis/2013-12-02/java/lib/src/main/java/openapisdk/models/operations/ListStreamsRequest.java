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
    public openapisdk.models.shared.ListStreamsInput request;
    public ListStreamsRequest withRequest(openapisdk.models.shared.ListStreamsInput request) {
        this.request = request;
        return this;
    }
}