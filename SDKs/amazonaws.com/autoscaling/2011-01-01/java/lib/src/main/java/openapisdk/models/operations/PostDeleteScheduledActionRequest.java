package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteScheduledActionRequest {
    public PostDeleteScheduledActionQueryParams queryParams;
    public PostDeleteScheduledActionRequest withQueryParams(PostDeleteScheduledActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteScheduledActionHeaders headers;
    public PostDeleteScheduledActionRequest withHeaders(PostDeleteScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteScheduledActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}