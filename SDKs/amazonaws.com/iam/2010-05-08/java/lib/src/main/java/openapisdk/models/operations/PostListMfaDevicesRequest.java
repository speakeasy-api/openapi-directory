package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMfaDevicesRequest {
    public PostListMfaDevicesQueryParams queryParams;
    public PostListMfaDevicesRequest withQueryParams(PostListMfaDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListMfaDevicesHeaders headers;
    public PostListMfaDevicesRequest withHeaders(PostListMfaDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListMfaDevicesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}