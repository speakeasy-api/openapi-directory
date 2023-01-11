package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPlatformVersionsRequest {
    public PostListPlatformVersionsQueryParams queryParams;
    public PostListPlatformVersionsRequest withQueryParams(PostListPlatformVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPlatformVersionsHeaders headers;
    public PostListPlatformVersionsRequest withHeaders(PostListPlatformVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPlatformVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}