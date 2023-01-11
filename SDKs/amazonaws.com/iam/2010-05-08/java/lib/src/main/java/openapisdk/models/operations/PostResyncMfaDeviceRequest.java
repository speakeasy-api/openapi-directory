package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResyncMfaDeviceRequest {
    public PostResyncMfaDeviceQueryParams queryParams;
    public PostResyncMfaDeviceRequest withQueryParams(PostResyncMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResyncMfaDeviceHeaders headers;
    public PostResyncMfaDeviceRequest withHeaders(PostResyncMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResyncMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}