package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteApplicationRequest {
    public PostDeleteApplicationQueryParams queryParams;
    public PostDeleteApplicationRequest withQueryParams(PostDeleteApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteApplicationHeaders headers;
    public PostDeleteApplicationRequest withHeaders(PostDeleteApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteApplicationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}