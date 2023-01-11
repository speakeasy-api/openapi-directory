package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScalingPlansRequest {
    public DescribeScalingPlansHeaders headers;
    public DescribeScalingPlansRequest withHeaders(DescribeScalingPlansHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScalingPlansRequest request;
    public DescribeScalingPlansRequest withRequest(openapisdk.models.shared.DescribeScalingPlansRequest request) {
        this.request = request;
        return this;
    }
}