package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceEventWindowsRequest {
    public PostDescribeInstanceEventWindowsQueryParams queryParams;
    public PostDescribeInstanceEventWindowsRequest withQueryParams(PostDescribeInstanceEventWindowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceEventWindowsHeaders headers;
    public PostDescribeInstanceEventWindowsRequest withHeaders(PostDescribeInstanceEventWindowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceEventWindowsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}