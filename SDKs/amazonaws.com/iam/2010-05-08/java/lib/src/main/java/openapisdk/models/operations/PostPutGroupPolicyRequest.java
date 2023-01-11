package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutGroupPolicyRequest {
    public PostPutGroupPolicyQueryParams queryParams;
    public PostPutGroupPolicyRequest withQueryParams(PostPutGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutGroupPolicyHeaders headers;
    public PostPutGroupPolicyRequest withHeaders(PostPutGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutGroupPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}