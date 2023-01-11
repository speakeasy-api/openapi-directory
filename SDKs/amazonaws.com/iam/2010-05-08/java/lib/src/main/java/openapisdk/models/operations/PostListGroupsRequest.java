package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupsRequest {
    public PostListGroupsQueryParams queryParams;
    public PostListGroupsRequest withQueryParams(PostListGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListGroupsHeaders headers;
    public PostListGroupsRequest withHeaders(PostListGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}