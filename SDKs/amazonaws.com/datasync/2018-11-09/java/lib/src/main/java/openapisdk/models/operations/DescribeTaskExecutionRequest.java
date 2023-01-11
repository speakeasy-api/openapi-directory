package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTaskExecutionRequest {
    public DescribeTaskExecutionHeaders headers;
    public DescribeTaskExecutionRequest withHeaders(DescribeTaskExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTaskExecutionRequest request;
    public DescribeTaskExecutionRequest withRequest(openapisdk.models.shared.DescribeTaskExecutionRequest request) {
        this.request = request;
        return this;
    }
}