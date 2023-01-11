package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetSecurityGroupsActionEnum action;
    public GetSetSecurityGroupsQueryParams withAction(GetSetSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerArn")
    public String loadBalancerArn;
    public GetSetSecurityGroupsQueryParams withLoadBalancerArn(String loadBalancerArn) {
        this.loadBalancerArn = loadBalancerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SecurityGroups")
    public String[] securityGroups;
    public GetSetSecurityGroupsQueryParams withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetSecurityGroupsVersionEnum version;
    public GetSetSecurityGroupsQueryParams withVersion(GetSetSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}