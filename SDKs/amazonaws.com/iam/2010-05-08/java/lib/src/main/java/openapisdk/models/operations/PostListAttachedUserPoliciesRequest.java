package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedUserPoliciesRequest {
    public PostListAttachedUserPoliciesQueryParams queryParams;
    public PostListAttachedUserPoliciesRequest withQueryParams(PostListAttachedUserPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAttachedUserPoliciesHeaders headers;
    public PostListAttachedUserPoliciesRequest withHeaders(PostListAttachedUserPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAttachedUserPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}