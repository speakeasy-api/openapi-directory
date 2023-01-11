package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeComponentRequest {
    public DescribeComponentHeaders headers;
    public DescribeComponentRequest withHeaders(DescribeComponentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeComponentRequest request;
    public DescribeComponentRequest withRequest(openapisdk.models.shared.DescribeComponentRequest request) {
        this.request = request;
        return this;
    }
}