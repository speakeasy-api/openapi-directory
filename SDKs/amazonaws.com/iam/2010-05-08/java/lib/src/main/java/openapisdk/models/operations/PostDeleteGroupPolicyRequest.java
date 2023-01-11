package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGroupPolicyRequest {
    public PostDeleteGroupPolicyQueryParams queryParams;
    public PostDeleteGroupPolicyRequest withQueryParams(PostDeleteGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteGroupPolicyHeaders headers;
    public PostDeleteGroupPolicyRequest withHeaders(PostDeleteGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteGroupPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}