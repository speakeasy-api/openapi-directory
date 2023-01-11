package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTaskRequest {
    public DescribeTaskHeaders headers;
    public DescribeTaskRequest withHeaders(DescribeTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTaskRequest request;
    public DescribeTaskRequest withRequest(openapisdk.models.shared.DescribeTaskRequest request) {
        this.request = request;
        return this;
    }
}