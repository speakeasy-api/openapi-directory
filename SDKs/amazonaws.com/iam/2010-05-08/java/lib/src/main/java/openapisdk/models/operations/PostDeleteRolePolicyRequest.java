package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRolePolicyRequest {
    public PostDeleteRolePolicyQueryParams queryParams;
    public PostDeleteRolePolicyRequest withQueryParams(PostDeleteRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteRolePolicyHeaders headers;
    public PostDeleteRolePolicyRequest withHeaders(PostDeleteRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}