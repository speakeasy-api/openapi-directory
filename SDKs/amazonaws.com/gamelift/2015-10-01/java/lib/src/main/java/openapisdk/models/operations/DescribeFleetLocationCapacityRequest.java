package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetLocationCapacityRequest {
    public DescribeFleetLocationCapacityHeaders headers;
    public DescribeFleetLocationCapacityRequest withHeaders(DescribeFleetLocationCapacityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetLocationCapacityInput request;
    public DescribeFleetLocationCapacityRequest withRequest(openapisdk.models.shared.DescribeFleetLocationCapacityInput request) {
        this.request = request;
        return this;
    }
}