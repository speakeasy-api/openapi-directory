package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUsageLimitRequest {
    public PostCreateUsageLimitQueryParams queryParams;
    public PostCreateUsageLimitRequest withQueryParams(PostCreateUsageLimitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateUsageLimitHeaders headers;
    public PostCreateUsageLimitRequest withHeaders(PostCreateUsageLimitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateUsageLimitRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}