package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchStopUpdateActionRequest {
    public PostBatchStopUpdateActionQueryParams queryParams;
    public PostBatchStopUpdateActionRequest withQueryParams(PostBatchStopUpdateActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchStopUpdateActionHeaders headers;
    public PostBatchStopUpdateActionRequest withHeaders(PostBatchStopUpdateActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchStopUpdateActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}