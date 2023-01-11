package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAttachedGroupPoliciesRequest {
    public PostListAttachedGroupPoliciesQueryParams queryParams;
    public PostListAttachedGroupPoliciesRequest withQueryParams(PostListAttachedGroupPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListAttachedGroupPoliciesHeaders headers;
    public PostListAttachedGroupPoliciesRequest withHeaders(PostListAttachedGroupPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListAttachedGroupPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}