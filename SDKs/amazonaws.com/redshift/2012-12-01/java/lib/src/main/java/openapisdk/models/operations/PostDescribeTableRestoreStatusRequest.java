package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTableRestoreStatusRequest {
    public PostDescribeTableRestoreStatusQueryParams queryParams;
    public PostDescribeTableRestoreStatusRequest withQueryParams(PostDescribeTableRestoreStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTableRestoreStatusHeaders headers;
    public PostDescribeTableRestoreStatusRequest withHeaders(PostDescribeTableRestoreStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTableRestoreStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}