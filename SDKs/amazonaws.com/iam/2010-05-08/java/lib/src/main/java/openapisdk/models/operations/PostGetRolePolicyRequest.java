package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetRolePolicyRequest {
    public PostGetRolePolicyQueryParams queryParams;
    public PostGetRolePolicyRequest withQueryParams(PostGetRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetRolePolicyHeaders headers;
    public PostGetRolePolicyRequest withHeaders(PostGetRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}