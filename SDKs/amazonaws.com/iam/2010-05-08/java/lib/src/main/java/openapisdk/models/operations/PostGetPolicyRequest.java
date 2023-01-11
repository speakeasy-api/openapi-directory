package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPolicyRequest {
    public PostGetPolicyQueryParams queryParams;
    public PostGetPolicyRequest withQueryParams(PostGetPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetPolicyHeaders headers;
    public PostGetPolicyRequest withHeaders(PostGetPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}