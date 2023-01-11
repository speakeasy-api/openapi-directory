package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagMfaDeviceRequest {
    public PostTagMfaDeviceQueryParams queryParams;
    public PostTagMfaDeviceRequest withQueryParams(PostTagMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagMfaDeviceHeaders headers;
    public PostTagMfaDeviceRequest withHeaders(PostTagMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}