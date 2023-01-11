package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachRolePolicyRequest {
    public PostAttachRolePolicyQueryParams queryParams;
    public PostAttachRolePolicyRequest withQueryParams(PostAttachRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachRolePolicyHeaders headers;
    public PostAttachRolePolicyRequest withHeaders(PostAttachRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}