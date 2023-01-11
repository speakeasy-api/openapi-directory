package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPolicyTagsRequest {
    public PostListPolicyTagsQueryParams queryParams;
    public PostListPolicyTagsRequest withQueryParams(PostListPolicyTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPolicyTagsHeaders headers;
    public PostListPolicyTagsRequest withHeaders(PostListPolicyTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPolicyTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}