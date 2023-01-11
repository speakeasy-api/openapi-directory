package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAccessKeysRequest {
    public PostListAccessKeysQueryParams queryParams;
    public PostListAccessKeysRequest withQueryParams(PostListAccessKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAccessKeysHeaders headers;
    public PostListAccessKeysRequest withHeaders(PostListAccessKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAccessKeysRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}