package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListIdentityPoliciesRequest {
    public PostListIdentityPoliciesQueryParams queryParams;
    public PostListIdentityPoliciesRequest withQueryParams(PostListIdentityPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListIdentityPoliciesHeaders headers;
    public PostListIdentityPoliciesRequest withHeaders(PostListIdentityPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListIdentityPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}