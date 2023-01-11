package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetUtilizationRequest {
    public DescribeFleetUtilizationQueryParams queryParams;
    public DescribeFleetUtilizationRequest withQueryParams(DescribeFleetUtilizationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeFleetUtilizationHeaders headers;
    public DescribeFleetUtilizationRequest withHeaders(DescribeFleetUtilizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetUtilizationInput request;
    public DescribeFleetUtilizationRequest withRequest(openapisdk.models.shared.DescribeFleetUtilizationInput request) {
        this.request = request;
        return this;
    }
}