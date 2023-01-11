package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchDeleteScheduledActionRequest {
    public PostBatchDeleteScheduledActionQueryParams queryParams;
    public PostBatchDeleteScheduledActionRequest withQueryParams(PostBatchDeleteScheduledActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBatchDeleteScheduledActionHeaders headers;
    public PostBatchDeleteScheduledActionRequest withHeaders(PostBatchDeleteScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchDeleteScheduledActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}