package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddTagsToResourceRequest {
    public PostAddTagsToResourceQueryParams queryParams;
    public PostAddTagsToResourceRequest withQueryParams(PostAddTagsToResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddTagsToResourceHeaders headers;
    public PostAddTagsToResourceRequest withHeaders(PostAddTagsToResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddTagsToResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}