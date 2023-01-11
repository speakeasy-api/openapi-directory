package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendRawEmailRequest {
    public PostSendRawEmailQueryParams queryParams;
    public PostSendRawEmailRequest withQueryParams(PostSendRawEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendRawEmailHeaders headers;
    public PostSendRawEmailRequest withHeaders(PostSendRawEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendRawEmailRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}