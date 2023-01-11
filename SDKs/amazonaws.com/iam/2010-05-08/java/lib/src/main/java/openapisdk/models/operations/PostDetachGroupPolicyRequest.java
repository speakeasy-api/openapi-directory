package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachGroupPolicyRequest {
    public PostDetachGroupPolicyQueryParams queryParams;
    public PostDetachGroupPolicyRequest withQueryParams(PostDetachGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachGroupPolicyHeaders headers;
    public PostDetachGroupPolicyRequest withHeaders(PostDetachGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachGroupPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}