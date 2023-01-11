package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupRequest {
    public PostGetGroupQueryParams queryParams;
    public PostGetGroupRequest withQueryParams(PostGetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetGroupHeaders headers;
    public PostGetGroupRequest withHeaders(PostGetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}