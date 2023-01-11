package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProgressUpdateStreamsRequest {
    public ListProgressUpdateStreamsQueryParams queryParams;
    public ListProgressUpdateStreamsRequest withQueryParams(ListProgressUpdateStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProgressUpdateStreamsHeaders headers;
    public ListProgressUpdateStreamsRequest withHeaders(ListProgressUpdateStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProgressUpdateStreamsRequest request;
    public ListProgressUpdateStreamsRequest withRequest(openapisdk.models.shared.ListProgressUpdateStreamsRequest request) {
        this.request = request;
        return this;
    }
}