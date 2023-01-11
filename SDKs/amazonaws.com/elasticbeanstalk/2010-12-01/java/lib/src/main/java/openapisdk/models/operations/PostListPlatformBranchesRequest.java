package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPlatformBranchesRequest {
    public PostListPlatformBranchesQueryParams queryParams;
    public PostListPlatformBranchesRequest withQueryParams(PostListPlatformBranchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListPlatformBranchesHeaders headers;
    public PostListPlatformBranchesRequest withHeaders(PostListPlatformBranchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListPlatformBranchesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}