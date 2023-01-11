package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStacksRequest {
    public DescribeStacksHeaders headers;
    public DescribeStacksRequest withHeaders(DescribeStacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStacksRequest request;
    public DescribeStacksRequest withRequest(openapisdk.models.shared.DescribeStacksRequest request) {
        this.request = request;
        return this;
    }
}