package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAccountLimitsRequest {
    public PostDescribeAccountLimitsQueryParams queryParams;
    public PostDescribeAccountLimitsRequest withQueryParams(PostDescribeAccountLimitsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAccountLimitsHeaders headers;
    public PostDescribeAccountLimitsRequest withHeaders(PostDescribeAccountLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAccountLimitsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}