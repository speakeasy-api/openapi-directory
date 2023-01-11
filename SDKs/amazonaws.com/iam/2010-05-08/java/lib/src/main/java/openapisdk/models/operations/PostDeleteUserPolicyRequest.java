package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserPolicyRequest {
    public PostDeleteUserPolicyQueryParams queryParams;
    public PostDeleteUserPolicyRequest withQueryParams(PostDeleteUserPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteUserPolicyHeaders headers;
    public PostDeleteUserPolicyRequest withHeaders(PostDeleteUserPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteUserPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}