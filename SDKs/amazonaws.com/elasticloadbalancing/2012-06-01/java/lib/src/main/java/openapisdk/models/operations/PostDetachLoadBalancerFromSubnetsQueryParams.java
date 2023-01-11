package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancerFromSubnetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachLoadBalancerFromSubnetsActionEnum action;
    public PostDetachLoadBalancerFromSubnetsQueryParams withAction(PostDetachLoadBalancerFromSubnetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachLoadBalancerFromSubnetsVersionEnum version;
    public PostDetachLoadBalancerFromSubnetsQueryParams withVersion(PostDetachLoadBalancerFromSubnetsVersionEnum version) {
        this.version = version;
        return this;
    }
}