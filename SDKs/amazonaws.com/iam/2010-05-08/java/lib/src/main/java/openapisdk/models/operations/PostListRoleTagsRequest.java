package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRoleTagsRequest {
    public PostListRoleTagsQueryParams queryParams;
    public PostListRoleTagsRequest withQueryParams(PostListRoleTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListRoleTagsHeaders headers;
    public PostListRoleTagsRequest withHeaders(PostListRoleTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListRoleTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}