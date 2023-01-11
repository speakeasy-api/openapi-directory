package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeUsageLimitsRequest {
    public PostDescribeUsageLimitsQueryParams queryParams;
    public PostDescribeUsageLimitsRequest withQueryParams(PostDescribeUsageLimitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeUsageLimitsHeaders headers;
    public PostDescribeUsageLimitsRequest withHeaders(PostDescribeUsageLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeUsageLimitsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}