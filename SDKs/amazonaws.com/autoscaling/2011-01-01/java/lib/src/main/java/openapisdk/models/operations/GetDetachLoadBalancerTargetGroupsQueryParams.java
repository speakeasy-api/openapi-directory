package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachLoadBalancerTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachLoadBalancerTargetGroupsActionEnum action;
    public GetDetachLoadBalancerTargetGroupsQueryParams withAction(GetDetachLoadBalancerTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDetachLoadBalancerTargetGroupsQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetGroupARNs")
    public String[] targetGroupARNs;
    public GetDetachLoadBalancerTargetGroupsQueryParams withTargetGroupArNs(String[] targetGroupARNs) {
        this.targetGroupARNs = targetGroupARNs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachLoadBalancerTargetGroupsVersionEnum version;
    public GetDetachLoadBalancerTargetGroupsQueryParams withVersion(GetDetachLoadBalancerTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}