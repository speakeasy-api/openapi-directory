package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamRequest {
    public DescribeStreamHeaders headers;
    public DescribeStreamRequest withHeaders(DescribeStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeStreamRequestBody request;
    public DescribeStreamRequest withRequest(DescribeStreamRequestBody request) {
        this.request = request;
        return this;
    }
}