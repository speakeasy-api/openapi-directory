package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationRequest {
    public PostUpdateApplicationQueryParams queryParams;
    public PostUpdateApplicationRequest withQueryParams(PostUpdateApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateApplicationHeaders headers;
    public PostUpdateApplicationRequest withHeaders(PostUpdateApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateApplicationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}