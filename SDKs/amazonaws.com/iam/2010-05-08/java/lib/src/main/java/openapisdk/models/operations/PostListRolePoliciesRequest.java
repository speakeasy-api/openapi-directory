package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRolePoliciesRequest {
    public PostListRolePoliciesQueryParams queryParams;
    public PostListRolePoliciesRequest withQueryParams(PostListRolePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListRolePoliciesHeaders headers;
    public PostListRolePoliciesRequest withHeaders(PostListRolePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListRolePoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}