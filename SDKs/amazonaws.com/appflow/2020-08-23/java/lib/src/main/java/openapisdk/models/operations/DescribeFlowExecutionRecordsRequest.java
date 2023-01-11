package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFlowExecutionRecordsRequest {
    public DescribeFlowExecutionRecordsQueryParams queryParams;
    public DescribeFlowExecutionRecordsRequest withQueryParams(DescribeFlowExecutionRecordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFlowExecutionRecordsHeaders headers;
    public DescribeFlowExecutionRecordsRequest withHeaders(DescribeFlowExecutionRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeFlowExecutionRecordsRequestBody request;
    public DescribeFlowExecutionRecordsRequest withRequest(DescribeFlowExecutionRecordsRequestBody request) {
        this.request = request;
        return this;
    }
}