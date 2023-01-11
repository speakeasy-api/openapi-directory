package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplySecurityGroupsToLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostApplySecurityGroupsToLoadBalancerActionEnum action;
    public PostApplySecurityGroupsToLoadBalancerQueryParams withAction(PostApplySecurityGroupsToLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostApplySecurityGroupsToLoadBalancerVersionEnum version;
    public PostApplySecurityGroupsToLoadBalancerQueryParams withVersion(PostApplySecurityGroupsToLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}