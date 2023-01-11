package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetCapacityRequest {
    public DescribeFleetCapacityQueryParams queryParams;
    public DescribeFleetCapacityRequest withQueryParams(DescribeFleetCapacityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFleetCapacityHeaders headers;
    public DescribeFleetCapacityRequest withHeaders(DescribeFleetCapacityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetCapacityInput request;
    public DescribeFleetCapacityRequest withRequest(openapisdk.models.shared.DescribeFleetCapacityInput request) {
        this.request = request;
        return this;
    }
}