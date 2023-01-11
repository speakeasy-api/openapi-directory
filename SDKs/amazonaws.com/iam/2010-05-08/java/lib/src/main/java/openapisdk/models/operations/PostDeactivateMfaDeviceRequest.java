package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeactivateMfaDeviceRequest {
    public PostDeactivateMfaDeviceQueryParams queryParams;
    public PostDeactivateMfaDeviceRequest withQueryParams(PostDeactivateMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeactivateMfaDeviceHeaders headers;
    public PostDeactivateMfaDeviceRequest withHeaders(PostDeactivateMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeactivateMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}