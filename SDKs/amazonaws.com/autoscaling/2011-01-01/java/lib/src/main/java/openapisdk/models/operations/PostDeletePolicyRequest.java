package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePolicyRequest {
    public PostDeletePolicyQueryParams queryParams;
    public PostDeletePolicyRequest withQueryParams(PostDeletePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeletePolicyHeaders headers;
    public PostDeletePolicyRequest withHeaders(PostDeletePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeletePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}