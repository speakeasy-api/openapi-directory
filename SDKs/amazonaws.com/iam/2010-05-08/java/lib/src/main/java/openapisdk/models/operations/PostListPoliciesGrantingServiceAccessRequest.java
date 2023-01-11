package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPoliciesGrantingServiceAccessRequest {
    public PostListPoliciesGrantingServiceAccessQueryParams queryParams;
    public PostListPoliciesGrantingServiceAccessRequest withQueryParams(PostListPoliciesGrantingServiceAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPoliciesGrantingServiceAccessHeaders headers;
    public PostListPoliciesGrantingServiceAccessRequest withHeaders(PostListPoliciesGrantingServiceAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPoliciesGrantingServiceAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}