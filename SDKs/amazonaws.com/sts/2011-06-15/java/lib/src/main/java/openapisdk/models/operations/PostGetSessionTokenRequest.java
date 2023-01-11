package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSessionTokenRequest {
    public PostGetSessionTokenQueryParams queryParams;
    public PostGetSessionTokenRequest withQueryParams(PostGetSessionTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSessionTokenHeaders headers;
    public PostGetSessionTokenRequest withHeaders(PostGetSessionTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetSessionTokenRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}