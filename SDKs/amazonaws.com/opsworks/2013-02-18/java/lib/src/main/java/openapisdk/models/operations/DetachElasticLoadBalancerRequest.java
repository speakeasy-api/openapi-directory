package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachElasticLoadBalancerRequest {
    public DetachElasticLoadBalancerHeaders headers;
    public DetachElasticLoadBalancerRequest withHeaders(DetachElasticLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachElasticLoadBalancerRequest request;
    public DetachElasticLoadBalancerRequest withRequest(openapisdk.models.shared.DetachElasticLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}