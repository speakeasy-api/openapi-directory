package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteFpgaImageRequest {
    public PostDeleteFpgaImageQueryParams queryParams;
    public PostDeleteFpgaImageRequest withQueryParams(PostDeleteFpgaImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteFpgaImageHeaders headers;
    public PostDeleteFpgaImageRequest withHeaders(PostDeleteFpgaImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteFpgaImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}