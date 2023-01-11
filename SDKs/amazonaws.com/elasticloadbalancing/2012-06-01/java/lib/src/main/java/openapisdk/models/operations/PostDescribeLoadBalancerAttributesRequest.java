package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerAttributesRequest {
    public PostDescribeLoadBalancerAttributesQueryParams queryParams;
    public PostDescribeLoadBalancerAttributesRequest withQueryParams(PostDescribeLoadBalancerAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoadBalancerAttributesHeaders headers;
    public PostDescribeLoadBalancerAttributesRequest withHeaders(PostDescribeLoadBalancerAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoadBalancerAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}