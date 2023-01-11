package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerTargetGroupsRequest {
    public PostDescribeLoadBalancerTargetGroupsQueryParams queryParams;
    public PostDescribeLoadBalancerTargetGroupsRequest withQueryParams(PostDescribeLoadBalancerTargetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoadBalancerTargetGroupsHeaders headers;
    public PostDescribeLoadBalancerTargetGroupsRequest withHeaders(PostDescribeLoadBalancerTargetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoadBalancerTargetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}