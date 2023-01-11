package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLoadBalancerRequest {
    public UpdateLoadBalancerPathParams pathParams;
    public UpdateLoadBalancerRequest withPathParams(UpdateLoadBalancerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateLoadBalancerRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}