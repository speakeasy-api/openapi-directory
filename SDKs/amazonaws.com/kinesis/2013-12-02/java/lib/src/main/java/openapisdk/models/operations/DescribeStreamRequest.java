package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamRequest {
    public DescribeStreamQueryParams queryParams;
    public DescribeStreamRequest withQueryParams(DescribeStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeStreamHeaders headers;
    public DescribeStreamRequest withHeaders(DescribeStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStreamInput request;
    public DescribeStreamRequest withRequest(openapisdk.models.shared.DescribeStreamInput request) {
        this.request = request;
        return this;
    }
}