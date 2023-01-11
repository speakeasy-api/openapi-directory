package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeResizeRequest {
    public PostDescribeResizeQueryParams queryParams;
    public PostDescribeResizeRequest withQueryParams(PostDescribeResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeResizeHeaders headers;
    public PostDescribeResizeRequest withHeaders(PostDescribeResizeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeResizeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}