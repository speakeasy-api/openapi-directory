package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScalingActivitiesRequest {
    public PostDescribeScalingActivitiesQueryParams queryParams;
    public PostDescribeScalingActivitiesRequest withQueryParams(PostDescribeScalingActivitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeScalingActivitiesHeaders headers;
    public PostDescribeScalingActivitiesRequest withHeaders(PostDescribeScalingActivitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeScalingActivitiesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}