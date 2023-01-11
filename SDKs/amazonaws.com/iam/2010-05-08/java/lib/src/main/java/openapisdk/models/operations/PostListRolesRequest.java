package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRolesRequest {
    public PostListRolesQueryParams queryParams;
    public PostListRolesRequest withQueryParams(PostListRolesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListRolesHeaders headers;
    public PostListRolesRequest withHeaders(PostListRolesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListRolesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}