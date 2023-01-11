package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterImageRequest {
    public PostRegisterImageQueryParams queryParams;
    public PostRegisterImageRequest withQueryParams(PostRegisterImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterImageHeaders headers;
    public PostRegisterImageRequest withHeaders(PostRegisterImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterImageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}