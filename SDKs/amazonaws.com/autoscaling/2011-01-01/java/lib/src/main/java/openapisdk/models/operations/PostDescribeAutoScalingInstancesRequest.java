package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAutoScalingInstancesRequest {
    public PostDescribeAutoScalingInstancesQueryParams queryParams;
    public PostDescribeAutoScalingInstancesRequest withQueryParams(PostDescribeAutoScalingInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAutoScalingInstancesHeaders headers;
    public PostDescribeAutoScalingInstancesRequest withHeaders(PostDescribeAutoScalingInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAutoScalingInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}