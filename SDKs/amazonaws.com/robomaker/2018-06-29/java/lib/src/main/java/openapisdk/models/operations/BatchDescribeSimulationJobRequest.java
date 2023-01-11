package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDescribeSimulationJobRequest {
    public BatchDescribeSimulationJobHeaders headers;
    public BatchDescribeSimulationJobRequest withHeaders(BatchDescribeSimulationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDescribeSimulationJobRequestBody request;
    public BatchDescribeSimulationJobRequest withRequest(BatchDescribeSimulationJobRequestBody request) {
        this.request = request;
        return this;
    }
}