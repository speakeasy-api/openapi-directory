package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePlatformVersionRequest {
    public PostCreatePlatformVersionQueryParams queryParams;
    public PostCreatePlatformVersionRequest withQueryParams(PostCreatePlatformVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreatePlatformVersionHeaders headers;
    public PostCreatePlatformVersionRequest withHeaders(PostCreatePlatformVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreatePlatformVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}