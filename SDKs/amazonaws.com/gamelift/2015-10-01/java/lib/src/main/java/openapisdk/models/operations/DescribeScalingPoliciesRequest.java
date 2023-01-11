package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScalingPoliciesRequest {
    public DescribeScalingPoliciesQueryParams queryParams;
    public DescribeScalingPoliciesRequest withQueryParams(DescribeScalingPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeScalingPoliciesHeaders headers;
    public DescribeScalingPoliciesRequest withHeaders(DescribeScalingPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScalingPoliciesInput request;
    public DescribeScalingPoliciesRequest withRequest(openapisdk.models.shared.DescribeScalingPoliciesInput request) {
        this.request = request;
        return this;
    }
}