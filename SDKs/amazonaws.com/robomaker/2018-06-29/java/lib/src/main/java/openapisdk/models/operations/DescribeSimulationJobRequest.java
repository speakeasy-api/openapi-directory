package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSimulationJobRequest {
    public DescribeSimulationJobHeaders headers;
    public DescribeSimulationJobRequest withHeaders(DescribeSimulationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSimulationJobRequestBody request;
    public DescribeSimulationJobRequest withRequest(DescribeSimulationJobRequestBody request) {
        this.request = request;
        return this;
    }
}