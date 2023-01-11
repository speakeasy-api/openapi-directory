package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLoadBalancerTargetGroupsActionEnum action;
    public PostDescribeLoadBalancerTargetGroupsQueryParams withAction(PostDescribeLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLoadBalancerTargetGroupsVersionEnum version;
    public PostDescribeLoadBalancerTargetGroupsQueryParams withVersion(PostDescribeLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}