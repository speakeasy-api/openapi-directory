package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScalingActivitiesRequest {
    public DescribeScalingActivitiesQueryParams queryParams;
    public DescribeScalingActivitiesRequest withQueryParams(DescribeScalingActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeScalingActivitiesHeaders headers;
    public DescribeScalingActivitiesRequest withHeaders(DescribeScalingActivitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScalingActivitiesRequest request;
    public DescribeScalingActivitiesRequest withRequest(openapisdk.models.shared.DescribeScalingActivitiesRequest request) {
        this.request = request;
        return this;
    }
}