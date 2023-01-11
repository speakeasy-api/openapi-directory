package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoadBalancerRequest {
    public CreateLoadBalancerHeaders headers;
    public CreateLoadBalancerRequest withHeaders(CreateLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLoadBalancerRequest request;
    public CreateLoadBalancerRequest withRequest(openapisdk.models.shared.CreateLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}