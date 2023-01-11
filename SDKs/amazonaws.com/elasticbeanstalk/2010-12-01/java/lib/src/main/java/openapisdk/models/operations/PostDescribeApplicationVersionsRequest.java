package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeApplicationVersionsRequest {
    public PostDescribeApplicationVersionsQueryParams queryParams;
    public PostDescribeApplicationVersionsRequest withQueryParams(PostDescribeApplicationVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeApplicationVersionsHeaders headers;
    public PostDescribeApplicationVersionsRequest withHeaders(PostDescribeApplicationVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeApplicationVersionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}