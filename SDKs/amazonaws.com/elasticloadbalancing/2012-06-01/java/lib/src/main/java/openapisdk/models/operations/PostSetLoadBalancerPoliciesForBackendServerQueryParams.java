package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerPoliciesForBackendServerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetLoadBalancerPoliciesForBackendServerActionEnum action;
    public PostSetLoadBalancerPoliciesForBackendServerQueryParams withAction(PostSetLoadBalancerPoliciesForBackendServerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetLoadBalancerPoliciesForBackendServerVersionEnum version;
    public PostSetLoadBalancerPoliciesForBackendServerQueryParams withVersion(PostSetLoadBalancerPoliciesForBackendServerVersionEnum version) {
        this.version = version;
        return this;
    }
}