package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancerToSubnetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachLoadBalancerToSubnetsActionEnum action;
    public PostAttachLoadBalancerToSubnetsQueryParams withAction(PostAttachLoadBalancerToSubnetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachLoadBalancerToSubnetsVersionEnum version;
    public PostAttachLoadBalancerToSubnetsQueryParams withVersion(PostAttachLoadBalancerToSubnetsVersionEnum version) {
        this.version = version;
        return this;
    }
}