package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSimulationApplicationRequest {
    public DescribeSimulationApplicationHeaders headers;
    public DescribeSimulationApplicationRequest withHeaders(DescribeSimulationApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSimulationApplicationRequestBody request;
    public DescribeSimulationApplicationRequest withRequest(DescribeSimulationApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}