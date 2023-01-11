package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLoadBalancerForwardingRulesRequest {
    public AddLoadBalancerForwardingRulesPathParams pathParams;
    public AddLoadBalancerForwardingRulesRequest withPathParams(AddLoadBalancerForwardingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public AddLoadBalancerForwardingRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}