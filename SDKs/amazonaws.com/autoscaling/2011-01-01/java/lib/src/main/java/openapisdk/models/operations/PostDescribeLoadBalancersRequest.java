package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancersRequest {
    public PostDescribeLoadBalancersQueryParams queryParams;
    public PostDescribeLoadBalancersRequest withQueryParams(PostDescribeLoadBalancersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeLoadBalancersHeaders headers;
    public PostDescribeLoadBalancersRequest withHeaders(PostDescribeLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeLoadBalancersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}