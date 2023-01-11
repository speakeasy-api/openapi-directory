package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLoadBalancerPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLoadBalancerPolicyActionEnum action;
    public PostCreateLoadBalancerPolicyQueryParams withAction(PostCreateLoadBalancerPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLoadBalancerPolicyVersionEnum version;
    public PostCreateLoadBalancerPolicyQueryParams withVersion(PostCreateLoadBalancerPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}