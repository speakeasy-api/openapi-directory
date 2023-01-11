package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutUserPolicyRequest {
    public PostPutUserPolicyQueryParams queryParams;
    public PostPutUserPolicyRequest withQueryParams(PostPutUserPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutUserPolicyHeaders headers;
    public PostPutUserPolicyRequest withHeaders(PostPutUserPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutUserPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}