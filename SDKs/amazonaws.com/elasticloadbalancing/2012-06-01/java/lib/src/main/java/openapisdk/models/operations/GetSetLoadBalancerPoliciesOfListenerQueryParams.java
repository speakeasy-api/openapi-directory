package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetLoadBalancerPoliciesOfListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetLoadBalancerPoliciesOfListenerActionEnum action;
    public GetSetLoadBalancerPoliciesOfListenerQueryParams withAction(GetSetLoadBalancerPoliciesOfListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetSetLoadBalancerPoliciesOfListenerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerPort")
    public Long loadBalancerPort;
    public GetSetLoadBalancerPoliciesOfListenerQueryParams withLoadBalancerPort(Long loadBalancerPort) {
        this.loadBalancerPort = loadBalancerPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;
    public GetSetLoadBalancerPoliciesOfListenerQueryParams withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetLoadBalancerPoliciesOfListenerVersionEnum version;
    public GetSetLoadBalancerPoliciesOfListenerQueryParams withVersion(GetSetLoadBalancerPoliciesOfListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}