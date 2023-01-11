package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagResourceRequest {
    public PostTagResourceQueryParams queryParams;
    public PostTagResourceRequest withQueryParams(PostTagResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagResourceHeaders headers;
    public PostTagResourceRequest withHeaders(PostTagResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagResourceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}