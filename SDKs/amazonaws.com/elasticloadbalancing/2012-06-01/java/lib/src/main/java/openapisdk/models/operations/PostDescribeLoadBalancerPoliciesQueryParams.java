package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoadBalancerPoliciesActionEnum action;
    public PostDescribeLoadBalancerPoliciesQueryParams withAction(PostDescribeLoadBalancerPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoadBalancerPoliciesVersionEnum version;
    public PostDescribeLoadBalancerPoliciesQueryParams withVersion(PostDescribeLoadBalancerPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}