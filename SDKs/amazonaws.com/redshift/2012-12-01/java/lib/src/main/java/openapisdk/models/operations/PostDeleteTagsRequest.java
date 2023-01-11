package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTagsRequest {
    public PostDeleteTagsQueryParams queryParams;
    public PostDeleteTagsRequest withQueryParams(PostDeleteTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTagsHeaders headers;
    public PostDeleteTagsRequest withHeaders(PostDeleteTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}