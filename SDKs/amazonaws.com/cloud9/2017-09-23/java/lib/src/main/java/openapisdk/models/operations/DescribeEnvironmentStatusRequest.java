package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEnvironmentStatusRequest {
    public DescribeEnvironmentStatusHeaders headers;
    public DescribeEnvironmentStatusRequest withHeaders(DescribeEnvironmentStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEnvironmentStatusRequest request;
    public DescribeEnvironmentStatusRequest withRequest(openapisdk.models.shared.DescribeEnvironmentStatusRequest request) {
        this.request = request;
        return this;
    }
}