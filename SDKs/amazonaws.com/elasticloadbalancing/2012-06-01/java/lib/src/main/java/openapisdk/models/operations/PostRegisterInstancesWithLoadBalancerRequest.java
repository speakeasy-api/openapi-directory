package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterInstancesWithLoadBalancerRequest {
    public PostRegisterInstancesWithLoadBalancerQueryParams queryParams;
    public PostRegisterInstancesWithLoadBalancerRequest withQueryParams(PostRegisterInstancesWithLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterInstancesWithLoadBalancerHeaders headers;
    public PostRegisterInstancesWithLoadBalancerRequest withHeaders(PostRegisterInstancesWithLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterInstancesWithLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}