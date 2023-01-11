package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListTagsForResourceRequest {
    public PostListTagsForResourceQueryParams queryParams;
    public PostListTagsForResourceRequest withQueryParams(PostListTagsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListTagsForResourceHeaders headers;
    public PostListTagsForResourceRequest withHeaders(PostListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListTagsForResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}