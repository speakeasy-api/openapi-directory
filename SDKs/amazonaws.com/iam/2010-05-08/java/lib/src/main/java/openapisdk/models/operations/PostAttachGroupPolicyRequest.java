package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachGroupPolicyRequest {
    public PostAttachGroupPolicyQueryParams queryParams;
    public PostAttachGroupPolicyRequest withQueryParams(PostAttachGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachGroupPolicyHeaders headers;
    public PostAttachGroupPolicyRequest withHeaders(PostAttachGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachGroupPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}