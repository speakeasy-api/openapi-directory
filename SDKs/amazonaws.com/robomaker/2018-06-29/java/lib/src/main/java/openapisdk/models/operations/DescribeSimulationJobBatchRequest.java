package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSimulationJobBatchRequest {
    public DescribeSimulationJobBatchHeaders headers;
    public DescribeSimulationJobBatchRequest withHeaders(DescribeSimulationJobBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSimulationJobBatchRequestBody request;
    public DescribeSimulationJobBatchRequest withRequest(DescribeSimulationJobBatchRequestBody request) {
        this.request = request;
        return this;
    }
}