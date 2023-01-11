package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterInstancesFromLoadBalancerRequest {
    public PostDeregisterInstancesFromLoadBalancerQueryParams queryParams;
    public PostDeregisterInstancesFromLoadBalancerRequest withQueryParams(PostDeregisterInstancesFromLoadBalancerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterInstancesFromLoadBalancerHeaders headers;
    public PostDeregisterInstancesFromLoadBalancerRequest withHeaders(PostDeregisterInstancesFromLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterInstancesFromLoadBalancerRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}