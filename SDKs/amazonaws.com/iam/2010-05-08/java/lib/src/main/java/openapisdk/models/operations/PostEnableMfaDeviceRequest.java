package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnableMfaDeviceRequest {
    public PostEnableMfaDeviceQueryParams queryParams;
    public PostEnableMfaDeviceRequest withQueryParams(PostEnableMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostEnableMfaDeviceHeaders headers;
    public PostEnableMfaDeviceRequest withHeaders(PostEnableMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostEnableMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}