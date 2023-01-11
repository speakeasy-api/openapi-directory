package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateTagsForResourceRequest {
    public PostUpdateTagsForResourceQueryParams queryParams;
    public PostUpdateTagsForResourceRequest withQueryParams(PostUpdateTagsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateTagsForResourceHeaders headers;
    public PostUpdateTagsForResourceRequest withHeaders(PostUpdateTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateTagsForResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}