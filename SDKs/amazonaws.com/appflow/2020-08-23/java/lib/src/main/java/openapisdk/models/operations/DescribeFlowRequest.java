package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFlowRequest {
    public DescribeFlowHeaders headers;
    public DescribeFlowRequest withHeaders(DescribeFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeFlowRequestBody request;
    public DescribeFlowRequest withRequest(DescribeFlowRequestBody request) {
        this.request = request;
        return this;
    }
}