package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePolicyVersionRequest {
    public PostCreatePolicyVersionQueryParams queryParams;
    public PostCreatePolicyVersionRequest withQueryParams(PostCreatePolicyVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreatePolicyVersionHeaders headers;
    public PostCreatePolicyVersionRequest withHeaders(PostCreatePolicyVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreatePolicyVersionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}