package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetRequest {
    public DescribeFleetHeaders headers;
    public DescribeFleetRequest withHeaders(DescribeFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeFleetRequestBody request;
    public DescribeFleetRequest withRequest(DescribeFleetRequestBody request) {
        this.request = request;
        return this;
    }
}