package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetachInstancesFromLoadBalancerRequest {
    public DetachInstancesFromLoadBalancerHeaders headers;
    public DetachInstancesFromLoadBalancerRequest withHeaders(DetachInstancesFromLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetachInstancesFromLoadBalancerRequest request;
    public DetachInstancesFromLoadBalancerRequest withRequest(openapisdk.models.shared.DetachInstancesFromLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}