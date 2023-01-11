package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateScheduledActionRequest {
    public PostCreateScheduledActionQueryParams queryParams;
    public PostCreateScheduledActionRequest withQueryParams(PostCreateScheduledActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateScheduledActionHeaders headers;
    public PostCreateScheduledActionRequest withHeaders(PostCreateScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateScheduledActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}