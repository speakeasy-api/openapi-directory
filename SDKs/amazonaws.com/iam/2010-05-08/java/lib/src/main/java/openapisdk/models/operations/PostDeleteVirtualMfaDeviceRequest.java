package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVirtualMfaDeviceRequest {
    public PostDeleteVirtualMfaDeviceQueryParams queryParams;
    public PostDeleteVirtualMfaDeviceRequest withQueryParams(PostDeleteVirtualMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteVirtualMfaDeviceHeaders headers;
    public PostDeleteVirtualMfaDeviceRequest withHeaders(PostDeleteVirtualMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteVirtualMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}