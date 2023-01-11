package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendTemplatedEmailRequest {
    public PostSendTemplatedEmailQueryParams queryParams;
    public PostSendTemplatedEmailRequest withQueryParams(PostSendTemplatedEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendTemplatedEmailHeaders headers;
    public PostSendTemplatedEmailRequest withHeaders(PostSendTemplatedEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendTemplatedEmailRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}