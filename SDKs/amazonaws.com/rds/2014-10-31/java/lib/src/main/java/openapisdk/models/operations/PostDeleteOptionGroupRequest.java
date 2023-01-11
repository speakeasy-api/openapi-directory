package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteOptionGroupRequest {
    public PostDeleteOptionGroupQueryParams queryParams;
    public PostDeleteOptionGroupRequest withQueryParams(PostDeleteOptionGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteOptionGroupHeaders headers;
    public PostDeleteOptionGroupRequest withHeaders(PostDeleteOptionGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteOptionGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}