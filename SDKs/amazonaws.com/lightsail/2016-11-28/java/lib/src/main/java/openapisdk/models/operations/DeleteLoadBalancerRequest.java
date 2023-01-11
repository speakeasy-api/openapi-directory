package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoadBalancerRequest {
    public DeleteLoadBalancerHeaders headers;
    public DeleteLoadBalancerRequest withHeaders(DeleteLoadBalancerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLoadBalancerRequest request;
    public DeleteLoadBalancerRequest withRequest(openapisdk.models.shared.DeleteLoadBalancerRequest request) {
        this.request = request;
        return this;
    }
}