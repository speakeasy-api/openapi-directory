package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyFpgaImageRequest {
    public PostCopyFpgaImageQueryParams queryParams;
    public PostCopyFpgaImageRequest withQueryParams(PostCopyFpgaImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCopyFpgaImageHeaders headers;
    public PostCopyFpgaImageRequest withHeaders(PostCopyFpgaImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCopyFpgaImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}