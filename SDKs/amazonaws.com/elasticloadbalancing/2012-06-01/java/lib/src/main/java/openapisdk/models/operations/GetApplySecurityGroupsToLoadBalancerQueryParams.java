package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApplySecurityGroupsToLoadBalancerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetApplySecurityGroupsToLoadBalancerActionEnum action;
    public GetApplySecurityGroupsToLoadBalancerQueryParams withAction(GetApplySecurityGroupsToLoadBalancerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetApplySecurityGroupsToLoadBalancerQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SecurityGroups")
    public String[] securityGroups;
    public GetApplySecurityGroupsToLoadBalancerQueryParams withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetApplySecurityGroupsToLoadBalancerVersionEnum version;
    public GetApplySecurityGroupsToLoadBalancerQueryParams withVersion(GetApplySecurityGroupsToLoadBalancerVersionEnum version) {
        this.version = version;
        return this;
    }
}