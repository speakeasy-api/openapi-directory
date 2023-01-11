package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceProfileRequest {
    public PostCreateInstanceProfileQueryParams queryParams;
    public PostCreateInstanceProfileRequest withQueryParams(PostCreateInstanceProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateInstanceProfileHeaders headers;
    public PostCreateInstanceProfileRequest withHeaders(PostCreateInstanceProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateInstanceProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}