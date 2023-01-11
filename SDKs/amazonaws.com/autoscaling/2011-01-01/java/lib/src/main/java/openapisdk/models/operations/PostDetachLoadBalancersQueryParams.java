package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDetachLoadBalancersActionEnum action;
    public PostDetachLoadBalancersQueryParams withAction(PostDetachLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDetachLoadBalancersVersionEnum version;
    public PostDetachLoadBalancersQueryParams withVersion(PostDetachLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}