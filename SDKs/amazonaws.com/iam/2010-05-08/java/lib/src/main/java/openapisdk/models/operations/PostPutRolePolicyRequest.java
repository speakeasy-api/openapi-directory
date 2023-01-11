package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutRolePolicyRequest {
    public PostPutRolePolicyQueryParams queryParams;
    public PostPutRolePolicyRequest withQueryParams(PostPutRolePolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutRolePolicyHeaders headers;
    public PostPutRolePolicyRequest withHeaders(PostPutRolePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutRolePolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}