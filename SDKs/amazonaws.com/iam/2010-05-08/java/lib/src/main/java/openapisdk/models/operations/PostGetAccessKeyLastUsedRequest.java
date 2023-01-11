package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccessKeyLastUsedRequest {
    public PostGetAccessKeyLastUsedQueryParams queryParams;
    public PostGetAccessKeyLastUsedRequest withQueryParams(PostGetAccessKeyLastUsedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetAccessKeyLastUsedHeaders headers;
    public PostGetAccessKeyLastUsedRequest withHeaders(PostGetAccessKeyLastUsedHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetAccessKeyLastUsedRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}