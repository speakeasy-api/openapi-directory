package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUsageLimitRequest {
    public PostDeleteUsageLimitQueryParams queryParams;
    public PostDeleteUsageLimitRequest withQueryParams(PostDeleteUsageLimitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteUsageLimitHeaders headers;
    public PostDeleteUsageLimitRequest withHeaders(PostDeleteUsageLimitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteUsageLimitRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}