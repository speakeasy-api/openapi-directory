package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityPoliciesRequest {
    public PostGetIdentityPoliciesQueryParams queryParams;
    public PostGetIdentityPoliciesRequest withQueryParams(PostGetIdentityPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetIdentityPoliciesHeaders headers;
    public PostGetIdentityPoliciesRequest withHeaders(PostGetIdentityPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetIdentityPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}