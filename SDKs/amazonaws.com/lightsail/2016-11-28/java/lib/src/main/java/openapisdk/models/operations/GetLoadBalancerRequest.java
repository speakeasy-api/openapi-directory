package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancerRequest {
    public GetLoadBalancerHeaders headers;
    public GetLoadBalancerRequest withHeaders(GetLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLoadBalancerRequest request;
    public GetLoadBalancerRequest withRequest(openapisdk.models.shared.GetLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}