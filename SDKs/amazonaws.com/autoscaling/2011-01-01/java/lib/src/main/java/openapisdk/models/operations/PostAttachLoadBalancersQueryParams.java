package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachLoadBalancersActionEnum action;
    public PostAttachLoadBalancersQueryParams withAction(PostAttachLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachLoadBalancersVersionEnum version;
    public PostAttachLoadBalancersQueryParams withVersion(PostAttachLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}