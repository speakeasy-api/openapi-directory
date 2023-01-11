package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagResourceRequest {
    public PostUntagResourceQueryParams queryParams;
    public PostUntagResourceRequest withQueryParams(PostUntagResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagResourceHeaders headers;
    public PostUntagResourceRequest withHeaders(PostUntagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}