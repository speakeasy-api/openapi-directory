package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateImageRequest {
    public PostCreateImageQueryParams queryParams;
    public PostCreateImageRequest withQueryParams(PostCreateImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateImageHeaders headers;
    public PostCreateImageRequest withHeaders(PostCreateImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}