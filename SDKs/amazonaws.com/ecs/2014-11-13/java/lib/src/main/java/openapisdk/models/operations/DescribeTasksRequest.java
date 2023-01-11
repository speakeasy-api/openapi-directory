package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTasksRequest {
    public DescribeTasksHeaders headers;
    public DescribeTasksRequest withHeaders(DescribeTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTasksRequest request;
    public DescribeTasksRequest withRequest(openapisdk.models.shared.DescribeTasksRequest request) {
        this.request = request;
        return this;
    }
}