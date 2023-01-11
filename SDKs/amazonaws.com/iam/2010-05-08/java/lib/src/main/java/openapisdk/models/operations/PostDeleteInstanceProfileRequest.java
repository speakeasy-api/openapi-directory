package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstanceProfileRequest {
    public PostDeleteInstanceProfileQueryParams queryParams;
    public PostDeleteInstanceProfileRequest withQueryParams(PostDeleteInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteInstanceProfileHeaders headers;
    public PostDeleteInstanceProfileRequest withHeaders(PostDeleteInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}