package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachLoadBalancersActionEnum action;
    public GetDetachLoadBalancersQueryParams withAction(GetDetachLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDetachLoadBalancersQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerNames")
    public String[] loadBalancerNames;
    public GetDetachLoadBalancersQueryParams withLoadBalancerNames(String[] loadBalancerNames) {
        this.loadBalancerNames = loadBalancerNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachLoadBalancersVersionEnum version;
    public GetDetachLoadBalancersQueryParams withVersion(GetDetachLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}