package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoggingStatusRequest {
    public PostDescribeLoggingStatusQueryParams queryParams;
    public PostDescribeLoggingStatusRequest withQueryParams(PostDescribeLoggingStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoggingStatusHeaders headers;
    public PostDescribeLoggingStatusRequest withHeaders(PostDescribeLoggingStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoggingStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}