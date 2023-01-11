package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerPoliciesOfListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetLoadBalancerPoliciesOfListenerActionEnum action;
    public PostSetLoadBalancerPoliciesOfListenerQueryParams withAction(PostSetLoadBalancerPoliciesOfListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetLoadBalancerPoliciesOfListenerVersionEnum version;
    public PostSetLoadBalancerPoliciesOfListenerQueryParams withVersion(PostSetLoadBalancerPoliciesOfListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}