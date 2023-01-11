package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePolicyVersionRequest {
    public PostDeletePolicyVersionQueryParams queryParams;
    public PostDeletePolicyVersionRequest withQueryParams(PostDeletePolicyVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeletePolicyVersionHeaders headers;
    public PostDeletePolicyVersionRequest withHeaders(PostDeletePolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeletePolicyVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}