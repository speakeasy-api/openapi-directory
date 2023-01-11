package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetLoadBalancerPoliciesForBackendServerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetLoadBalancerPoliciesForBackendServerActionEnum action;
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams withAction(GetSetLoadBalancerPoliciesForBackendServerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstancePort")
    public Long instancePort;
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyNames")
    public String[] policyNames;
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetLoadBalancerPoliciesForBackendServerVersionEnum version;
    public GetSetLoadBalancerPoliciesForBackendServerQueryParams withVersion(GetSetLoadBalancerPoliciesForBackendServerVersionEnum version) {
        this.version = version;
        return this;
    }
}