package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePlatformVersionRequest {
    public PostDeletePlatformVersionQueryParams queryParams;
    public PostDeletePlatformVersionRequest withQueryParams(PostDeletePlatformVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeletePlatformVersionHeaders headers;
    public PostDeletePlatformVersionRequest withHeaders(PostDeletePlatformVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeletePlatformVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}