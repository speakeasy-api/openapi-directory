package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAutoScalingGroupsRequest {
    public PostDescribeAutoScalingGroupsQueryParams queryParams;
    public PostDescribeAutoScalingGroupsRequest withQueryParams(PostDescribeAutoScalingGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAutoScalingGroupsHeaders headers;
    public PostDescribeAutoScalingGroupsRequest withHeaders(PostDescribeAutoScalingGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAutoScalingGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}