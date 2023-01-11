package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerPolicyTypesRequest {
    public PostDescribeLoadBalancerPolicyTypesQueryParams queryParams;
    public PostDescribeLoadBalancerPolicyTypesRequest withQueryParams(PostDescribeLoadBalancerPolicyTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoadBalancerPolicyTypesHeaders headers;
    public PostDescribeLoadBalancerPolicyTypesRequest withHeaders(PostDescribeLoadBalancerPolicyTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoadBalancerPolicyTypesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}