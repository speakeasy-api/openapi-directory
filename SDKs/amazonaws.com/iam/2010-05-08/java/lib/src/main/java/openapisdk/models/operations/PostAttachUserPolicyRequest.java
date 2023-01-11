package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachUserPolicyRequest {
    public PostAttachUserPolicyQueryParams queryParams;
    public PostAttachUserPolicyRequest withQueryParams(PostAttachUserPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachUserPolicyHeaders headers;
    public PostAttachUserPolicyRequest withHeaders(PostAttachUserPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachUserPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}