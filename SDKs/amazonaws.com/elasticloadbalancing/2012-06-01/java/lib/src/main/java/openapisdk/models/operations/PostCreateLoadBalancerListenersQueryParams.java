package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerListenersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLoadBalancerListenersActionEnum action;
    public PostCreateLoadBalancerListenersQueryParams withAction(PostCreateLoadBalancerListenersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLoadBalancerListenersVersionEnum version;
    public PostCreateLoadBalancerListenersQueryParams withVersion(PostCreateLoadBalancerListenersVersionEnum version) {
        this.version = version;
        return this;
    }
}