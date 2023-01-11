package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateFpgaImageRequest {
    public PostCreateFpgaImageQueryParams queryParams;
    public PostCreateFpgaImageRequest withQueryParams(PostCreateFpgaImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateFpgaImageHeaders headers;
    public PostCreateFpgaImageRequest withHeaders(PostCreateFpgaImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateFpgaImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}