package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachLoadBalancerTargetGroupsActionEnum action;
    public PostDetachLoadBalancerTargetGroupsQueryParams withAction(PostDetachLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachLoadBalancerTargetGroupsVersionEnum version;
    public PostDetachLoadBalancerTargetGroupsQueryParams withVersion(PostDetachLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}