package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagInstanceProfileRequest {
    public PostUntagInstanceProfileQueryParams queryParams;
    public PostUntagInstanceProfileRequest withQueryParams(PostUntagInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagInstanceProfileHeaders headers;
    public PostUntagInstanceProfileRequest withHeaders(PostUntagInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}