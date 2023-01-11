package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerPolicyTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoadBalancerPolicyTypesActionEnum action;
    public PostDescribeLoadBalancerPolicyTypesQueryParams withAction(PostDescribeLoadBalancerPolicyTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoadBalancerPolicyTypesVersionEnum version;
    public PostDescribeLoadBalancerPolicyTypesQueryParams withVersion(PostDescribeLoadBalancerPolicyTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}