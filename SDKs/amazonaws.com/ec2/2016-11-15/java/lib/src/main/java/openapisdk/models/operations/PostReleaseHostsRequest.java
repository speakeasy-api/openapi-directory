package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReleaseHostsRequest {
    public PostReleaseHostsQueryParams queryParams;
    public PostReleaseHostsRequest withQueryParams(PostReleaseHostsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReleaseHostsHeaders headers;
    public PostReleaseHostsRequest withHeaders(PostReleaseHostsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReleaseHostsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}