package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUserPoliciesRequest {
    public PostListUserPoliciesQueryParams queryParams;
    public PostListUserPoliciesRequest withQueryParams(PostListUserPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListUserPoliciesHeaders headers;
    public PostListUserPoliciesRequest withHeaders(PostListUserPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListUserPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}