package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScalingPlanResourcesRequest {
    public DescribeScalingPlanResourcesHeaders headers;
    public DescribeScalingPlanResourcesRequest withHeaders(DescribeScalingPlanResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScalingPlanResourcesRequest request;
    public DescribeScalingPlanResourcesRequest withRequest(openapisdk.models.shared.DescribeScalingPlanResourcesRequest request) {
        this.request = request;
        return this;
    }
}