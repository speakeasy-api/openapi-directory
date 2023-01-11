package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutIdentityPolicyRequest {
    public PostPutIdentityPolicyQueryParams queryParams;
    public PostPutIdentityPolicyRequest withQueryParams(PostPutIdentityPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutIdentityPolicyHeaders headers;
    public PostPutIdentityPolicyRequest withHeaders(PostPutIdentityPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutIdentityPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}