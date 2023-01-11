package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupPolicyRequest {
    public PostGetGroupPolicyQueryParams queryParams;
    public PostGetGroupPolicyRequest withQueryParams(PostGetGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetGroupPolicyHeaders headers;
    public PostGetGroupPolicyRequest withHeaders(PostGetGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetGroupPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}