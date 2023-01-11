package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteLoadBalancerPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteLoadBalancerPolicyActionEnum action;
    public PostDeleteLoadBalancerPolicyQueryParams withAction(PostDeleteLoadBalancerPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteLoadBalancerPolicyVersionEnum version;
    public PostDeleteLoadBalancerPolicyQueryParams withVersion(PostDeleteLoadBalancerPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}