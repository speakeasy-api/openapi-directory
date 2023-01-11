package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagMfaDeviceRequest {
    public PostUntagMfaDeviceQueryParams queryParams;
    public PostUntagMfaDeviceRequest withQueryParams(PostUntagMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagMfaDeviceHeaders headers;
    public PostUntagMfaDeviceRequest withHeaders(PostUntagMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}