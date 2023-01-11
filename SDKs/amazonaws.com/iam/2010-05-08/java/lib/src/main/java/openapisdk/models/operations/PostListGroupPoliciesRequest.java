package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListGroupPoliciesRequest {
    public PostListGroupPoliciesQueryParams queryParams;
    public PostListGroupPoliciesRequest withQueryParams(PostListGroupPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListGroupPoliciesHeaders headers;
    public PostListGroupPoliciesRequest withHeaders(PostListGroupPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListGroupPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}