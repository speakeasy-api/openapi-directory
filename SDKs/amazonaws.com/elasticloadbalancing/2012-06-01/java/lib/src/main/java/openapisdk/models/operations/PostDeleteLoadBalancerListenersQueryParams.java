package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerListenersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLoadBalancerListenersActionEnum action;
    public PostDeleteLoadBalancerListenersQueryParams withAction(PostDeleteLoadBalancerListenersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLoadBalancerListenersVersionEnum version;
    public PostDeleteLoadBalancerListenersQueryParams withVersion(PostDeleteLoadBalancerListenersVersionEnum version) {
        this.version = version;
        return this;
    }
}