package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachRolePolicyRequest {
    public PostDetachRolePolicyQueryParams queryParams;
    public PostDetachRolePolicyRequest withQueryParams(PostDetachRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachRolePolicyHeaders headers;
    public PostDetachRolePolicyRequest withHeaders(PostDetachRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}