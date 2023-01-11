package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPolicyVersionsRequest {
    public PostListPolicyVersionsQueryParams queryParams;
    public PostListPolicyVersionsRequest withQueryParams(PostListPolicyVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPolicyVersionsHeaders headers;
    public PostListPolicyVersionsRequest withHeaders(PostListPolicyVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPolicyVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}