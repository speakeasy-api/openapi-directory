package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyOptionGroupRequest {
    public PostCopyOptionGroupQueryParams queryParams;
    public PostCopyOptionGroupRequest withQueryParams(PostCopyOptionGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyOptionGroupHeaders headers;
    public PostCopyOptionGroupRequest withHeaders(PostCopyOptionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyOptionGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}