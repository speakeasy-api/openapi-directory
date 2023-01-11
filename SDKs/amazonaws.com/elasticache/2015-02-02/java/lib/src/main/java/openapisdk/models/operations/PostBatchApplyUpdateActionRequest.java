package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchApplyUpdateActionRequest {
    public PostBatchApplyUpdateActionQueryParams queryParams;
    public PostBatchApplyUpdateActionRequest withQueryParams(PostBatchApplyUpdateActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchApplyUpdateActionHeaders headers;
    public PostBatchApplyUpdateActionRequest withHeaders(PostBatchApplyUpdateActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchApplyUpdateActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}