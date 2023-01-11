package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetLocationUtilizationRequest {
    public DescribeFleetLocationUtilizationHeaders headers;
    public DescribeFleetLocationUtilizationRequest withHeaders(DescribeFleetLocationUtilizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFleetLocationUtilizationInput request;
    public DescribeFleetLocationUtilizationRequest withRequest(openapisdk.models.shared.DescribeFleetLocationUtilizationInput request) {
        this.request = request;
        return this;
    }
}