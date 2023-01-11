package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccessKeyInfoRequest {
    public PostGetAccessKeyInfoQueryParams queryParams;
    public PostGetAccessKeyInfoRequest withQueryParams(PostGetAccessKeyInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAccessKeyInfoHeaders headers;
    public PostGetAccessKeyInfoRequest withHeaders(PostGetAccessKeyInfoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAccessKeyInfoRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}