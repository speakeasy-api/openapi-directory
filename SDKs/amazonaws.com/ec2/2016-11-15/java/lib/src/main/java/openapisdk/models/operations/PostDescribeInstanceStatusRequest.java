package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceStatusRequest {
    public PostDescribeInstanceStatusQueryParams queryParams;
    public PostDescribeInstanceStatusRequest withQueryParams(PostDescribeInstanceStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceStatusHeaders headers;
    public PostDescribeInstanceStatusRequest withHeaders(PostDescribeInstanceStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}