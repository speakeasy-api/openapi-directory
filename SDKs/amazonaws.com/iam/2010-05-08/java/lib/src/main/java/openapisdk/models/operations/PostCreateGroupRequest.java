package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateGroupRequest {
    public PostCreateGroupQueryParams queryParams;
    public PostCreateGroupRequest withQueryParams(PostCreateGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateGroupHeaders headers;
    public PostCreateGroupRequest withHeaders(PostCreateGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}