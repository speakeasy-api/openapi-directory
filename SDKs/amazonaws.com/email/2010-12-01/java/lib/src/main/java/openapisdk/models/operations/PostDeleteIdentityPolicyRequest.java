package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIdentityPolicyRequest {
    public PostDeleteIdentityPolicyQueryParams queryParams;
    public PostDeleteIdentityPolicyRequest withQueryParams(PostDeleteIdentityPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteIdentityPolicyHeaders headers;
    public PostDeleteIdentityPolicyRequest withHeaders(PostDeleteIdentityPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteIdentityPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}