package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachLoadBalancerTargetGroupsActionEnum action;
    public PostAttachLoadBalancerTargetGroupsQueryParams withAction(PostAttachLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachLoadBalancerTargetGroupsVersionEnum version;
    public PostAttachLoadBalancerTargetGroupsQueryParams withVersion(PostAttachLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}