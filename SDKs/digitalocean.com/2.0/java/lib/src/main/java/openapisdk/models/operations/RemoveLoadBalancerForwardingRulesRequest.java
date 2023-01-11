package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveLoadBalancerForwardingRulesRequest {
    public RemoveLoadBalancerForwardingRulesPathParams pathParams;
    public RemoveLoadBalancerForwardingRulesRequest withPathParams(RemoveLoadBalancerForwardingRulesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public RemoveLoadBalancerForwardingRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}