package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateApplicationRequest {
    public PostCreateApplicationQueryParams queryParams;
    public PostCreateApplicationRequest withQueryParams(PostCreateApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateApplicationHeaders headers;
    public PostCreateApplicationRequest withHeaders(PostCreateApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateApplicationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}