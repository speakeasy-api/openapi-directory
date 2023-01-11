package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSendBulkTemplatedEmailRequest {
    public PostSendBulkTemplatedEmailQueryParams queryParams;
    public PostSendBulkTemplatedEmailRequest withQueryParams(PostSendBulkTemplatedEmailQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSendBulkTemplatedEmailHeaders headers;
    public PostSendBulkTemplatedEmailRequest withHeaders(PostSendBulkTemplatedEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSendBulkTemplatedEmailRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}