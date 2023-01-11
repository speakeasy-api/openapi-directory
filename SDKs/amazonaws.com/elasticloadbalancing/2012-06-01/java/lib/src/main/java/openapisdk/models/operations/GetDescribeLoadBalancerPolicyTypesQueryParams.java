package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLoadBalancerPolicyTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLoadBalancerPolicyTypesActionEnum action;
    public GetDescribeLoadBalancerPolicyTypesQueryParams withAction(GetDescribeLoadBalancerPolicyTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyTypeNames")
    public String[] policyTypeNames;
    public GetDescribeLoadBalancerPolicyTypesQueryParams withPolicyTypeNames(String[] policyTypeNames) {
        this.policyTypeNames = policyTypeNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLoadBalancerPolicyTypesVersionEnum version;
    public GetDescribeLoadBalancerPolicyTypesQueryParams withVersion(GetDescribeLoadBalancerPolicyTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}