package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagInstanceProfileRequest {
    public PostTagInstanceProfileQueryParams queryParams;
    public PostTagInstanceProfileRequest withQueryParams(PostTagInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagInstanceProfileHeaders headers;
    public PostTagInstanceProfileRequest withHeaders(PostTagInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}