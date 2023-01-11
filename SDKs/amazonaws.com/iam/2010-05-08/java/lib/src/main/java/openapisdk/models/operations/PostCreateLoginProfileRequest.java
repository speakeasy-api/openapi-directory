package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoginProfileRequest {
    public PostCreateLoginProfileQueryParams queryParams;
    public PostCreateLoginProfileRequest withQueryParams(PostCreateLoginProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateLoginProfileHeaders headers;
    public PostCreateLoginProfileRequest withHeaders(PostCreateLoginProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateLoginProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}