package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListVirtualMfaDevicesRequest {
    public PostListVirtualMfaDevicesQueryParams queryParams;
    public PostListVirtualMfaDevicesRequest withQueryParams(PostListVirtualMfaDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListVirtualMfaDevicesHeaders headers;
    public PostListVirtualMfaDevicesRequest withHeaders(PostListVirtualMfaDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListVirtualMfaDevicesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}