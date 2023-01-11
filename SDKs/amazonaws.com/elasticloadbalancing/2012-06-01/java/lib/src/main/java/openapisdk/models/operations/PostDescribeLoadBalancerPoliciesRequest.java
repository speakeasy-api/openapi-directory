package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerPoliciesRequest {
    public PostDescribeLoadBalancerPoliciesQueryParams queryParams;
    public PostDescribeLoadBalancerPoliciesRequest withQueryParams(PostDescribeLoadBalancerPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoadBalancerPoliciesHeaders headers;
    public PostDescribeLoadBalancerPoliciesRequest withHeaders(PostDescribeLoadBalancerPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoadBalancerPoliciesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}