package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterImageRequest {
    public PostDeregisterImageQueryParams queryParams;
    public PostDeregisterImageRequest withQueryParams(PostDeregisterImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterImageHeaders headers;
    public PostDeregisterImageRequest withHeaders(PostDeregisterImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}