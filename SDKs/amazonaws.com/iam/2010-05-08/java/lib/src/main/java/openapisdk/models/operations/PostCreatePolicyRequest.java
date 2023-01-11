package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePolicyRequest {
    public PostCreatePolicyQueryParams queryParams;
    public PostCreatePolicyRequest withQueryParams(PostCreatePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreatePolicyHeaders headers;
    public PostCreatePolicyRequest withHeaders(PostCreatePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreatePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}