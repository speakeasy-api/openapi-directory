package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddTagsRequest {
    public PostAddTagsQueryParams queryParams;
    public PostAddTagsRequest withQueryParams(PostAddTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddTagsHeaders headers;
    public PostAddTagsRequest withHeaders(PostAddTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}