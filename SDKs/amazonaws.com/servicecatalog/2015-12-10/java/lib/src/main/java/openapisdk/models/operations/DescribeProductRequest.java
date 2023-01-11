package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProductRequest {
    public DescribeProductHeaders headers;
    public DescribeProductRequest withHeaders(DescribeProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProductInput request;
    public DescribeProductRequest withRequest(openapisdk.models.shared.DescribeProductInput request) {
        this.request = request;
        return this;
    }
}