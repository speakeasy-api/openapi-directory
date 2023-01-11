package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagPolicyRequest {
    public PostUntagPolicyQueryParams queryParams;
    public PostUntagPolicyRequest withQueryParams(PostUntagPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagPolicyHeaders headers;
    public PostUntagPolicyRequest withHeaders(PostUntagPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}