package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetUserPolicyRequest {
    public PostGetUserPolicyQueryParams queryParams;
    public PostGetUserPolicyRequest withQueryParams(PostGetUserPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetUserPolicyHeaders headers;
    public PostGetUserPolicyRequest withHeaders(PostGetUserPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetUserPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}