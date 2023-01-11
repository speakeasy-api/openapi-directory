package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListUserTagsRequest {
    public PostListUserTagsQueryParams queryParams;
    public PostListUserTagsRequest withQueryParams(PostListUserTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListUserTagsHeaders headers;
    public PostListUserTagsRequest withHeaders(PostListUserTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListUserTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}