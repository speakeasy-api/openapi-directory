package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetInstanceProfileRequest {
    public PostGetInstanceProfileQueryParams queryParams;
    public PostGetInstanceProfileRequest withQueryParams(PostGetInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetInstanceProfileHeaders headers;
    public PostGetInstanceProfileRequest withHeaders(PostGetInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}