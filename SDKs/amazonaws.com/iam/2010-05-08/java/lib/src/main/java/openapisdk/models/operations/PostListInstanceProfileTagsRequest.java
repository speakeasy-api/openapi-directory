package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListInstanceProfileTagsRequest {
    public PostListInstanceProfileTagsQueryParams queryParams;
    public PostListInstanceProfileTagsRequest withQueryParams(PostListInstanceProfileTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListInstanceProfileTagsHeaders headers;
    public PostListInstanceProfileTagsRequest withHeaders(PostListInstanceProfileTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListInstanceProfileTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}