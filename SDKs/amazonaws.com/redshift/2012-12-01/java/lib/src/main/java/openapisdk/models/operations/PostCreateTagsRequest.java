package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTagsRequest {
    public PostCreateTagsQueryParams queryParams;
    public PostCreateTagsRequest withQueryParams(PostCreateTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTagsHeaders headers;
    public PostCreateTagsRequest withHeaders(PostCreateTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}