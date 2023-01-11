package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListTemplatesRequest {
    public PostListTemplatesQueryParams queryParams;
    public PostListTemplatesRequest withQueryParams(PostListTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListTemplatesHeaders headers;
    public PostListTemplatesRequest withHeaders(PostListTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListTemplatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}