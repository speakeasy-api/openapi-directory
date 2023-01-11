package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLoadBalancerActionEnum action;
    public PostDeleteLoadBalancerQueryParams withAction(PostDeleteLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLoadBalancerVersionEnum version;
    public PostDeleteLoadBalancerQueryParams withVersion(PostDeleteLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}