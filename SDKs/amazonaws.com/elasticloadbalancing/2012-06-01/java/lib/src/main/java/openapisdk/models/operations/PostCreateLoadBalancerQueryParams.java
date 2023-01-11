package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLoadBalancerActionEnum action;
    public PostCreateLoadBalancerQueryParams withAction(PostCreateLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLoadBalancerVersionEnum version;
    public PostCreateLoadBalancerQueryParams withVersion(PostCreateLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}