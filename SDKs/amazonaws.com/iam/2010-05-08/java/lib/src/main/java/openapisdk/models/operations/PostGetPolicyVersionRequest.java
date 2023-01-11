package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPolicyVersionRequest {
    public PostGetPolicyVersionQueryParams queryParams;
    public PostGetPolicyVersionRequest withQueryParams(PostGetPolicyVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetPolicyVersionHeaders headers;
    public PostGetPolicyVersionRequest withHeaders(PostGetPolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetPolicyVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}