package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachElasticLoadBalancerRequest {
    public AttachElasticLoadBalancerHeaders headers;
    public AttachElasticLoadBalancerRequest withHeaders(AttachElasticLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachElasticLoadBalancerRequest request;
    public AttachElasticLoadBalancerRequest withRequest(openapisdk.models.shared.AttachElasticLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}