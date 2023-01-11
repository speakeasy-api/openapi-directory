package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendEmailRequest {
    public PostSendEmailQueryParams queryParams;
    public PostSendEmailRequest withQueryParams(PostSendEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendEmailHeaders headers;
    public PostSendEmailRequest withHeaders(PostSendEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendEmailRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}