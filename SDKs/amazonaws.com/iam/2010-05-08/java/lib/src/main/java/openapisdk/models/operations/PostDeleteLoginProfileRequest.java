package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoginProfileRequest {
    public PostDeleteLoginProfileQueryParams queryParams;
    public PostDeleteLoginProfileRequest withQueryParams(PostDeleteLoginProfileQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteLoginProfileHeaders headers;
    public PostDeleteLoginProfileRequest withHeaders(PostDeleteLoginProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteLoginProfileRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}