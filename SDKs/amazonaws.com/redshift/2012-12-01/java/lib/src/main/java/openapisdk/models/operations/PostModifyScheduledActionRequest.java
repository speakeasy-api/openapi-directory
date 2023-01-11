package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyScheduledActionRequest {
    public PostModifyScheduledActionQueryParams queryParams;
    public PostModifyScheduledActionRequest withQueryParams(PostModifyScheduledActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyScheduledActionHeaders headers;
    public PostModifyScheduledActionRequest withHeaders(PostModifyScheduledActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyScheduledActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}