package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedRolePoliciesRequest {
    public PostListAttachedRolePoliciesQueryParams queryParams;
    public PostListAttachedRolePoliciesRequest withQueryParams(PostListAttachedRolePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAttachedRolePoliciesHeaders headers;
    public PostListAttachedRolePoliciesRequest withHeaders(PostListAttachedRolePoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAttachedRolePoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}