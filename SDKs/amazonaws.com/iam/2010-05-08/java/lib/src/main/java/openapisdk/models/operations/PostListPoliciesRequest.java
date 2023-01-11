package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPoliciesRequest {
    public PostListPoliciesQueryParams queryParams;
    public PostListPoliciesRequest withQueryParams(PostListPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPoliciesHeaders headers;
    public PostListPoliciesRequest withHeaders(PostListPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}