package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVirtualMfaDeviceRequest {
    public PostCreateVirtualMfaDeviceQueryParams queryParams;
    public PostCreateVirtualMfaDeviceRequest withQueryParams(PostCreateVirtualMfaDeviceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateVirtualMfaDeviceHeaders headers;
    public PostCreateVirtualMfaDeviceRequest withHeaders(PostCreateVirtualMfaDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateVirtualMfaDeviceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}