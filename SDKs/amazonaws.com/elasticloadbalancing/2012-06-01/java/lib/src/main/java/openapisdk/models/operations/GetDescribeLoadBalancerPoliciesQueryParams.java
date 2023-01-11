package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancerPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancerPoliciesActionEnum action;
    public GetDescribeLoadBalancerPoliciesQueryParams withAction(GetDescribeLoadBalancerPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetDescribeLoadBalancerPoliciesQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;
    public GetDescribeLoadBalancerPoliciesQueryParams withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancerPoliciesVersionEnum version;
    public GetDescribeLoadBalancerPoliciesQueryParams withVersion(GetDescribeLoadBalancerPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}