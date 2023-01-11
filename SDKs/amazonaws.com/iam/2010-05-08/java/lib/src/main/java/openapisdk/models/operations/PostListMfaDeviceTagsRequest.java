package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMfaDeviceTagsRequest {
    public PostListMfaDeviceTagsQueryParams queryParams;
    public PostListMfaDeviceTagsRequest withQueryParams(PostListMfaDeviceTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListMfaDeviceTagsHeaders headers;
    public PostListMfaDeviceTagsRequest withHeaders(PostListMfaDeviceTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListMfaDeviceTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}