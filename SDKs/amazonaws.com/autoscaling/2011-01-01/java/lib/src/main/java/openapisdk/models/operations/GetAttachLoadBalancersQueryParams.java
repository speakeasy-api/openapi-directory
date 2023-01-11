package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachLoadBalancersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachLoadBalancersActionEnum action;
    public GetAttachLoadBalancersQueryParams withAction(GetAttachLoadBalancersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetAttachLoadBalancersQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerNames")
    public String[] loadBalancerNames;
    public GetAttachLoadBalancersQueryParams withLoadBalancerNames(String[] loadBalancerNames) {
        this.loadBalancerNames = loadBalancerNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachLoadBalancersVersionEnum version;
    public GetAttachLoadBalancersQueryParams withVersion(GetAttachLoadBalancersVersionEnum version) {
        this.version = version;
        return this;
    }
}