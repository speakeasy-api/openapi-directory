package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConversionTasksRequest {
    public PostDescribeConversionTasksQueryParams queryParams;
    public PostDescribeConversionTasksRequest withQueryParams(PostDescribeConversionTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeConversionTasksHeaders headers;
    public PostDescribeConversionTasksRequest withHeaders(PostDescribeConversionTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeConversionTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}