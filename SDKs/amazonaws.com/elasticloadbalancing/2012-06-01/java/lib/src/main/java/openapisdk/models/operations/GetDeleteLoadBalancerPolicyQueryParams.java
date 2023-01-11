package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteLoadBalancerPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteLoadBalancerPolicyActionEnum action;
    public GetDeleteLoadBalancerPolicyQueryParams withAction(GetDeleteLoadBalancerPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDeleteLoadBalancerPolicyQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetDeleteLoadBalancerPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteLoadBalancerPolicyVersionEnum version;
    public GetDeleteLoadBalancerPolicyQueryParams withVersion(GetDeleteLoadBalancerPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}