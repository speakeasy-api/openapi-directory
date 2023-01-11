package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeElasticLoadBalancersRequest {
    public DescribeElasticLoadBalancersHeaders headers;
    public DescribeElasticLoadBalancersRequest withHeaders(DescribeElasticLoadBalancersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeElasticLoadBalancersRequest request;
    public DescribeElasticLoadBalancersRequest withRequest(openapisdk.models.shared.DescribeElasticLoadBalancersRequest request) {
        this.request = request;
        return this;
    }
}