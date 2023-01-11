package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUsageLimitRequest {
    public PostModifyUsageLimitQueryParams queryParams;
    public PostModifyUsageLimitRequest withQueryParams(PostModifyUsageLimitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyUsageLimitHeaders headers;
    public PostModifyUsageLimitRequest withHeaders(PostModifyUsageLimitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyUsageLimitRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}